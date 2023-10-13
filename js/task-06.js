"use strict";
const inputForm = document.querySelector("#validation-input");
const inputBasicLength = Number(inputForm.dataset.length);

inputForm.addEventListener("blur", handlerBlur);
function handlerBlur(event) {
  const inputContentLength = event.currentTarget.value.length;
  console.log(inputContentLength);

  if (inputContentLength === inputBasicLength) {
    inputForm.classList.add("valid");
    inputForm.classList.remove("invalid");
  } else {
    inputForm.classList.add("invalid");
    inputForm.classList.remove("valid");
  }
}
