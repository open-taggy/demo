import { Taggy } from "../../taggy-base/taggy/lib/index";

// create instance of taggy
let taggyObject = new Taggy();

console.log(taggyObject.hello());

// setup HTML
// let divWrapper = document.createElement("div");
// divWrapper.id = "results";
// let outputField = document.createElement("input");
// outputField.id = "output";
// divWrapper.appendChild(outputField);
// document.body.appendChild(divWrapper);

// frequency output
// let frequencySpan = document.createElement("span");
// divWrapper.appendChild(frequencySpan);

let outputFieldForTaggy = document.getElementById("output");
console.log(outputFieldForTaggy);

taggyObject.setOutputField(outputFieldForTaggy);

// var tagify = new Tagify(outputFieldForTaggy);
taggyCreate("myTaggy", document.body, outputFieldForTaggy);

// loading animation
let divWrapperLoading = document.createElement("div");
divWrapperLoading.className = "loader";
divWrapperLoading.style.display = "none";

document.getElementById("myTaggy").appendChild(divWrapperLoading);

function taggyCreate(id, parent, outputFieldForTaggy) {
  let divWrapper = document.createElement("div");
  let inputField = document.createElement("textarea");
  taggyObject.setInputField(inputField);
  divWrapper.setAttribute("type", "text");
  divWrapper.appendChild(inputField);
  divWrapper.id = id;

  //   let canvasElem = document.createElement("canvas");
  parent.appendChild(divWrapper);
  //   divWrapper.appendChild(canvasElem);

  //   canvasElem.width = width;
  //   canvasElem.height = height;

  //   let ctx = canvasElem.getContext("2d");

  let timeout = null;

  inputField.addEventListener("input", async function (event) {
    clearTimeout(timeout);

    // Make a new timeout set to go off in 1000ms (1 second)
    timeout = setTimeout(async function () {
      divWrapperLoading.style.display = "block";
      // console.log("INPUTFIELDVALUE");
      // console.log(inputField.value);

      // createSimpleTag(taggy.taggyVanilla(inputField.value));
      let result = await taggyObject.processInput(inputField.value);
      divWrapperLoading.style.display = "none";

      taggyObject.processAndAddTags(inputField.value, outputFieldForTaggy);

      // let inputElementForTagify = await taggyObject.createTagify(
      //   outputFieldForTaggy
      // );

      // await taggyObject.deleteTags();

      console.log("result", result);
      console.log("result.length", result.length);
      if (!result.includes(undefined)) {
        // let addedTag = await taggyObject.addTags(result);

        // outputFieldForTaggy.value = result;

        let frequencySpan = document.getElementById("frequency");
        console.log("FREQ", frequencySpan);

        frequencySpan.innerHTML =
          "top candidates: " + (await taggyObject.getMostFrequent().join(" "));
      } else {
        frequencySpan.innerHTML = "No match with glossar";
      }
      // console.log(addedTag);

      // createSimpleTag(inputField.value);
    }, 1000);

    return {
      inputField: inputField,
    };
  });
}
