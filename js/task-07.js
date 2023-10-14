"use strict";
const fontSizeController = document.querySelector("#font-size-control");
const textBox = document.querySelector("#text");

fontSizeController.addEventListener("input", handlerInput);
function handlerInput() {
  const fontSizeValue = fontSizeController.value;
  textBox.style.fontSize = `${fontSizeValue}px`;
}
