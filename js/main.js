import { Taggy } from "../taggy-base/lib/index.js";

jQuery(function () {
  // create instance of taggy
  // let taggyObject = new Taggy();

  // set input field for taggy
  let inputFieldForTaggy = document.getElementById("taggyInput");
  // taggyObject.setInputField(inputFieldForTaggy);
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

  // create glossar visualization
  let taggyGlossar = taggyObject.getGlossar();
  console.log("taggyGlossar", taggyGlossar);

  if (!$.isEmptyObject(taggyGlossar)) {
    $("<div></div>")
      .attr("id", "container-glossar")
      .insertAfter("#container-input-output");

    $("#container-glossar").append(
      $("<div></div>")
        .attr("id", "glossar")
        .attr("class", "space-y-2")
        .append(
          $("<h3></h3>").attr("class", "text-rose-700 text-xl").text("Glossar")
        )
        .append(
          $("<p></p>")
            .attr("class", "text-sm")
            .text("taggy tags your input based on these trigger words")
        )
    );

    let glossarData = JSON.stringify(taggyGlossar, null, 2); // spacing level = 2
    $("#glossar").append(
      $("<pre></pre>")
        .addClass(
          "rounded-md outline outline-offset-1 outline-2 outline-gray-400 text-xs"
        )
        .text(glossarData)
    );

    // $.each(taggyGlossar, function (index, value) {});
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

});
