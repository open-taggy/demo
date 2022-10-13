import { Taggy } from "../../taggy-base/taggy/lib/index";

// create instance of taggy
let taggyObject = new Taggy();

// set input field for taggy
let inputFieldForTaggy = document.getElementById("taggyInput");
taggyObject.setInputField(inputFieldForTaggy);
console.log(inputFieldForTaggy);

// set output field for taggy
let outputFieldForTaggy = document.getElementById("taggyOutput");
taggyObject.setOutputField(outputFieldForTaggy);
console.log(outputFieldForTaggy);

// loading animation
let divWrapperLoading = document.createElement("div");
divWrapperLoading.className = "loader";
divWrapperLoading.style.display = "none";
document.getElementById("myTaggy").appendChild(divWrapperLoading);

let timeout = null;

// setup processing after feedback input -> TOTO: put into taggy
inputFieldForTaggy.addEventListener("input", async function (event) {
  clearTimeout(timeout);

  // make a new timeout set to go off in 1000ms
  timeout = setTimeout(async function () {
    divWrapperLoading.style.display = "block";
    // createSimpleTag(taggy.taggyVanilla(inputField.value));
    // let result = await taggyObject.processInput(inputFieldForTaggy.value);
    divWrapperLoading.style.display = "none";

    let result = await taggyObject.processAndAddTags(
      inputFieldForTaggy.value,
      outputFieldForTaggy
    );

    if (result && !result.includes(undefined)) {
      let frequencySpan = document.getElementById("frequency");

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
