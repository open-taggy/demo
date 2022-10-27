import { Taggy } from "../../taggy/lib/index";

$(document).ready(function () {
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

  let frequencySpan = document.getElementById("frequency");

  let taggyObject = new Taggy(
    inputFieldForTaggy,
    outputFieldForTaggy,
    frequencySpan
  );

  console.log(taggyObject.config);

  let wrapperOptions = document.getElementById("options");
  let taggyConfig = Object.keys(taggyObject.config);

  $.each(taggyConfig, function (index, value) {
    let labelText = " " + value;
    let nextElement = $(taggyConfig).eq(index + 1);
    let commentText = null;
    if (nextElement[0] && nextElement[0].includes("comment")) {
      commentText = taggyObject.config[nextElement[0]];
    }

    if (!value.includes("comment")) {
      let checkbox = $("#options")
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
  let loader = document.getElementById("loader");
  let timeout = null;

  // setup processing after feedback input -> TOTO: put into taggy
  inputFieldForTaggy.addEventListener("input", async function (event) {
    clearTimeout(timeout);

    // make a new timeout set to go off in 1000ms
    timeout = setTimeout(async function () {
      loader.style.display = "block";
      // createSimpleTag(taggy.taggyVanilla(inputField.value));
      // let result = await taggyObject.processInput(inputFieldForTaggy.value);

      let result = await taggyObject.processAndAddTags(
        inputFieldForTaggy.value,
        outputFieldForTaggy
      );
      loader.style.display = "none";

      if (result && !result.includes(undefined)) {
        frequencySpan.innerHTML =
          "top candidates: " + (await taggyObject.getMostFrequent().join(", "));
      } else {
        frequencySpan.innerHTML = "No match with glossar";
      }
    }, 1000);

    return {
      inputField: inputFieldForTaggy,
    };
  });
});
