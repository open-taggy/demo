import { Taggy } from "../../taggy/lib/index";

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

  // get element for frequency output
  let frequencySpan = document.getElementById("frequency");

  // create taggy instance
  let taggyObject = new Taggy(
    inputFieldForTaggy,
    outputFieldForTaggy,
    frequencySpan
  );

  console.log(taggyObject.config);

  let taggyConfig = Object.keys(taggyObject.config);
  console.log("CONFIG", taggyConfig);

  // create glossar visualization
  let taggyGlossar = taggyObject.getGlossar();
  console.log(taggyGlossar);

  if (!$.isEmptyObject(taggyGlossar)) {
    $("<div></div>")
      .attr("id", "container-right")
      .insertAfter("#container-left");

    $("#container-right").append(
      $("<div></div>")
        .attr("id", "glossar")
        .append($("<h3></h3>").text("Glossar"))
    );

    let glossarData = JSON.stringify(taggyGlossar, null, 2); // spacing level = 2
    $("#glossar").append($("<pre></pre>").text(glossarData));

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
        .append($("<label></label>").text(labelText));
      if (commentText) {
        checkbox.append(
          $("<span></span>").addClass("comment").text(commentText)
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

  // loading animation
  // let loader = document.getElementById("loader");
  // let timeout = null;

  // // setup processing after feedback input -> TOTO: put into taggy
  // inputFieldForTaggy.addEventListener("input", async function (event) {
  //   clearTimeout(timeout);

  //   // make a new timeout set to go off in 1000ms
  //   timeout = setTimeout(async function () {
  //     loader.style.display = "block";
  //     // createSimpleTag(taggy.taggyVanilla(inputField.value));
  //     // let result = await taggyObject.processInput(inputFieldForTaggy.value);

  //     let result = await taggyObject.processAndAddTags(
  //       inputFieldForTaggy.value,
  //       outputFieldForTaggy
  //     );
  //     loader.style.display = "none";

  //     if (result && !result.includes(undefined)) {
  //       frequencySpan.innerHTML =
  //         "Top candidates: " + (await taggyObject.getMostFrequent().join(", "));
  //     } else {
  //       frequencySpan.innerHTML = "No match with glossar";
  //     }
  //   }, 1000);

  //   return {
  //     inputField: inputFieldForTaggy,
  //   };
  // });
});
