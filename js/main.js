import { Taggy } from "../../taggy/lib/index.js";

import glossaryAbo from "../data/glossary_DE-abo.json";
import glossaryNewspaper from "../data/glossary_DE-newspaper.json";
import glossaryShop from "../data/glossary_EN-shop.json";


jQuery(function () {
  // create instance of taggy
  // let taggyObject = new Taggy();

  // set input field for taggy
  let inputFieldForTaggy = document.getElementById("taggyInput");
  // taggyObject.setInputField
  inputFieldForTaggy;
  // console.log(inputFieldForTaggy);

  // // set output field for taggy
  let outputFieldForTaggy = document.getElementById("taggyOutput");
  // taggyObject.setOutputField(outputFieldForTaggy);
  // console.log(outputFieldForTaggy);

  // set submit button taggy (optional)
  let submitButton = document.getElementById("taggySubmit");

  // get element for word count output (optional)
  let frequencySpan = document.getElementById("frequency");

  // get element for override-possibility output (optional)
  let overrideSpan = document.getElementById("override");

  // get loader element (optional)
  let loaderDiv = document.getElementById("taggyLoader");

  // create taggy instance
  let taggyObject = new Taggy(
    inputFieldForTaggy,
    outputFieldForTaggy,
    submitButton,
    frequencySpan,
    overrideSpan,
    loaderDiv
  );

  // console.log(taggyObject.config);

  let taggyConfig = Object.keys(taggyObject.config);
  console.log("CONFIG", taggyConfig);

  // create glossary visualization
  let taggyGlossary = taggyObject.getGlossary();
  console.log("taggyGlossary", taggyGlossary);

  // glossary-tab switching

  // $(function () {
  //   $("#tabs-1").tabs();
  // });

  $(".tabs").click(function () {
    let tabContent = $(this).attr("data");
    let selectedTabId = $(this).attr("id");
    console.log(tabContent);
    $(".tab-content").addClass("hidden");
    $(".tabs").removeClass("bg-rose-100");
    $("#" + tabContent).removeClass("hidden");
    $("#" + selectedTabId).addClass("bg-rose-100");

    if (selectedTabId === "tab-1") taggyObject.setGlossary(glossaryAbo);
    if (selectedTabId === "tab-2") taggyObject.setGlossary(glossaryNewspaper);
    if (selectedTabId === "tab-3") taggyObject.setGlossary(glossaryShop);

  });

  $('input[type="checkbox"]').click(function () {
    if ($(this).prop("checked") == true) {
      taggyObject.setOption($(this).val(), true);
    } else {
      taggyObject.setOption($(this).val(), false);
    }
  });

  if (!$.isEmptyObject(taggyGlossary)) {
    // $("<div></div>").attr("id", "container-glossary").insertAfter("#tab-content-1");

    $("#tab-content-1").append(
      $("<div></div>").attr("id", "container-glossary")
    );

    let glossaryData = JSON.stringify(taggyGlossary, null, 2); // spacing level = 2
    $("#tab-content-1").append(
      $("<pre></pre>")
        .addClass(
          "mt-2 rounded-md outline outline-offset-1 outline-2 outline-gray-400 text-xs"
        )
        .text(glossaryData)
    );

    // $.each(taggyGlossary, function (index, value) {});
  }

  // create options visualization
  $.each(taggyConfig, function (index, value) {
    let labelText = " " + value;
    let nextElement = $(taggyConfig).eq(index + 1);
    let commentText = null;
    if (nextElement[0] && nextElement[0].includes("comment")) {
      commentText = taggyObject.config[nextElement[0]];
    }

    if (!value.includes("comment")) {
      let checkbox = $("#container-options")
        .append(
          $("<input></input>")
            .attr("type", "checkbox")
            .attr("id", value)
            .val(value)
        )
        .append(
          $("<label></label>").addClass("text-sm font-bold").text(labelText)
        );
      if (commentText) {
        checkbox.append(
          $("<p></p>").addClass("text-justify text-xs").text(commentText)
        );
      }
      checkbox.append("</br>");

      if (taggyObject.config[value]) {
        $("#" + value).prop("checked", true);
      }
    }
  });

  $('input[type="checkbox"]').click(function () {
    if ($(this).prop("checked") == true) {
      taggyObject.setOption($(this).val(), true);
    } else {
      taggyObject.setOption($(this).val(), false);
    }
  });

  // trigger submit button on pressing 'enter' inside textfield
  inputFieldForTaggy.addEventListener("keydown", function (event) {
    // click listener on button is called
    if (event.key == "Enter") {
      submitButton.click();
    }
  });

  // give every new tag a random color
  // $('div[type="checkbox"]').click(function () {
  //   if ($(this).prop("checked") == true) {
  //     taggyObject.setOption($(this).val(), true);
  //   } else {
  //     taggyObject.setOption($(this).val(), false);
  //   }
  // });

  // load tab 1 of glossary
  $("#tab-1").trigger("click");

  // check fore new inserted DOM-elements (tags)
  $("body").on("DOMNodeInserted", ".override", function (event) {
    console.log("hit for", event.target);
    if (!($("#override-title").length > 0)) {
      const overrideTitle = $("<h3></h3>")
        .attr("id", "override-title")
        .text("Multiple possibilities found. Click to override main tag:")
        .addClass("pr-8");
      $("#override").prepend(overrideTitle);
    }
  });
});
