"use strict";
const incBtn = document.querySelector('button[data-action="increment"]');
const decBtn = document.querySelector('button[data-action="decrement"]');
const visualValue = document.querySelector("#value");
let counterValue = 0;

incBtn.addEventListener("click", handleInc);
function handleInc() {
  counterValue += 1;
  visualValue.textContent = counterValue;
}

decBtn.addEventListener("click", handleDec);
function handleDec() {
  counterValue -= 1;
  visualValue.textContent = counterValue;
}
