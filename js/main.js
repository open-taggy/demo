import { Taggy } from "../../taggy/lib/index.js";

import glossaryAbo from "../data/glossary_DE-abo.json";
import glossaryNewspaper from "../data/glossary_EN-news.json";
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

  // use submit button instead of auto-detection
  taggyObject.config.use_submit = true;

  // console.log(taggyObject.config);

  let optionsToggle = document.getElementById("optionsToggle");
  let glossaryToggle = $(".glossary-toggle");

  let taggyConfig = Object.keys(taggyObject.config);
  console.log("CONFIG", taggyConfig);

  // create glossary visualization
  let taggyGlossary = taggyObject.getGlossary();
  console.log("taggyGlossary", taggyGlossary);

  // glossary-tab switching
  $(".tabs").click(function () {
    let tabContent = $(this).attr("data");
    let selectedTabId = $(this).attr("id");
    console.log(tabContent);
    $(".tab-content").addClass("hidden");
    $(".tabs").removeClass("bg-rose-100");
    $("#" + tabContent).removeClass("hidden");
    $("#" + selectedTabId).addClass("bg-rose-100");

    switch (selectedTabId) {
      case "tab-1":
        example1 =
          "Pepperoni pizza is a classic favorite among pizza lovers. It is made with a tomato sauce base, cheese, and slices of pepperoni, a type of spicy salami. Pepperoni is a popular topping due to its spicy and savory flavor. Whether you're ordering in or making your own, it's a delicious and satisfying meal.";
        example2 =
          "Environmental awareness is the understanding and recognition of the impact of human actions on the natural world. It is important to be mindful of the ways in which our daily choices and habits can harm the environment and make efforts to reduce our impact. Simple actions such as reducing, reusing, and recycling can make a significant difference in preserving the planet for future generations. By raising environmental awareness, which is also part of the politics, we can work together to create a sustainable future for all.";
        example3 =
          "A growth recession is a period of economic decline characterized by low or negative GDP growth. It is different from a typical recession in which there is a significant decrease in economic activity, but still positive GDP growth. Economic growth recessions are often caused by a combination of factors such as global economic slowdown, tight monetary policies, and political instability. To mitigate the effects of growth recession, governments and central banks may implement policies such as monetary stimulus and fiscal stimulus.";
        switchGlossary("1", glossaryNewspaper, example1, example2, example3);
        break;
      case "tab-2":
        example1 =
          "Ich habe eure Zeitung bestellt und sie landet nie da, wo sie hin soll. Das ist eine Frechheit!";
        example2 =
          "Guten Tag. Wir verreisen ins Ausland. Deswegen bitte um Nachsendung der Zeitung an die neue Adresse: ...";
        example3 =
          "Hallo. Auf meinem ereader wird das PDF einfach nicht richtig dargestellt. Bitte um Rückmeldung.";
        switchGlossary("2", glossaryAbo, example1, example2, example3);
        break;
      case "tab-3":
        switchGlossary("3", glossaryShop, example1, example2, example3);
        presentInput = "";
        break;
    }

    function switchGlossary(
      number,
      glossaryData,
      example1,
      example2,
      example3
    ) {
      $("#taggyInput").val(example1);
      $("#example1").data("text", example1);
      $("#example1").prop("disabled", true);
      $("#example1").addClass("opacity-50 cursor-not-allowed");
      $("#example2").data("text", example2);
      $("#example3").data("text", example3);

      taggyObject.deleteTags();
      $("#extras").addClass("hidden");
      taggyObject.setGlossary(glossaryData);

      if (!$("#tab-content-" + number + " #container-glossary").length) {
        console.log("#container-glossary IS NOT inside #tab-content-" + number);

        let glossaryDataPrint = JSON.stringify(glossaryData, null, 2); // spacing level = 2
        // $("#tab-content-" + number)
        //   .find(".glossary-content")
        //   .append($("<div></div>").attr("id", "container-glossary"));

        let preElement = $("<pre id='glossary-pre'></pre>")
          .addClass(
            "mt-2 rounded-md outline outline-offset-1 outline-2 outline-gray-400 text-[0.66rem] hidden"
          )
          .text(glossaryDataPrint);

        $("#glossary-pre").remove();

        $("#tab-content-" + number)
          .find(".glossary-content")
          .append(preElement);
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

  $(submitButton).on("click", function () {
    $("#extras").addClass("hidden");
  });

  $(".button-example").on("click", function () {
    taggyObject.deleteTags();
    $("#extras").addClass("hidden");
    console.log("this", this);
    console.log("data-text", $(this).data("text"));
    $(".button-example").removeClass("opacity-50 cursor-not-allowed");
    $(".button-example").prop("disabled", false);
    $(this).prop("disabled", true);
    $(this).addClass("opacity-50 cursor-not-allowed");
    $("#taggyInput").val($(this).data("text"));
  });

  // options toggle functionality
  $(optionsToggle).on("click", function () {
    $("#container-options").toggleClass("hidden");
    $("#options-chevron-left").toggleClass("hidden");
    $("#options-chevron-down").toggleClass("hidden");
  });

  // glossary toggle functionality
  $(glossaryToggle).on("click", function () {
    console.log("glossaryToggle clicked");
    $("#glossary-pre").toggleClass("hidden");
    $("#glossary-chevron-left").toggleClass("hidden");
    $("#glossary-chevron-down").toggleClass("hidden");
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
    $("#extras").removeClass("hidden");
    console.log("hit for", event.target);
    if (!($("#override-title").length > 0)) {
      const overrideTitle = $("<h3></h3>")
        .attr("id", "override-title")
        .text("Multiple possibilities found. Click to override main tag:")
        .addClass("pr-8 text-sm");
      $("#override").prepend(overrideTitle);
    }
  });
});
