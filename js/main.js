import { taggy } from "../../taggy-base/taggy/lib/index";

// console.log(taggy);
// import Tagify from "@yaireo/tagify";

// const Tagify = window.tagify;
// let myCanvas = create("myCanvas", document.body, 480, 320);
// let reportList = createReportList(myCanvas.id);

// let square1 = draw(myCanvas.ctx, 50, 50, 100, "blue");
// reportArea(square1.length, reportList);
// reportPerimeter(square1.length, reportList);

// // Use the default
// let square2 = randomSquare(myCanvas.ctx);

let divWrapper = document.createElement("div");
divWrapper.id = "results";
let outputField = document.createElement("input");
outputField.id = "output";
divWrapper.appendChild(outputField);
document.body.appendChild(divWrapper);

// frequency output
let frequencySpan = document.createElement("span");
divWrapper.appendChild(frequencySpan);

let outputFieldForTagify = document.getElementById("output");
// var tagify = new Tagify(outputFieldForTagify);
let myTaggy = taggyCreate("myTaggy", document.body, outputFieldForTagify);

// loading animation
let divWrapperLoading = document.createElement("div");
divWrapperLoading.className = "loader";
divWrapperLoading.style.display = "none";

document.getElementById("myTaggy").appendChild(divWrapperLoading);

function taggyCreate(id, parent, outputFieldForTagify) {
  let divWrapper = document.createElement("div");
  let inputField = document.createElement("textarea");
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
      let result = await taggy.processInput(inputField.value);
      divWrapperLoading.style.display = "none";

      // console.log("RESULT", result);

      // tagify.addTags(result);
      // tagify.addTags("yes");
      let inputElementForTagify = await taggy.createTagify(
        outputFieldForTagify
      );
      await taggy.deleteTags();

      console.log("result", result);
      console.log("result.length", result.length);
      if (!result.includes(undefined)) {
        let addedTag = await taggy.addTags(result);

        frequencySpan.innerHTML =
          "top candidates: " + (await taggy.getMostFrequent().join(" "));
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

  function createSimpleTag(value) {
    // let tagDivWrapper = document.createElement("div");
    // let pField = document.createElement("p");
    // tagDivWrapper.appendChild(pField);
    // console.log(pField);
    // pField.innerText = value;
    // pField.style.border = "solid 1px black";
    // let myTaggy = document.getElementById("myTaggy");
    // console.log(myTaggy);

    // myTaggy.appendChild(tagDivWrapper);

    // tagify.addTags([
    //   { value: "banana", color: "yellow" },
    //   { value: "apple", color: "red" },
    //   { value: "watermelon", color: "green" },
    // ]);

    tagify.addTags([{ value: value, color: "yellow" }]);
  }
}
