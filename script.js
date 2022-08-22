"use strict";

const numbers = [...document.querySelectorAll(".number")];
const submit = document.querySelector(".submit");
const rating = document.querySelector("#rating");
const thanks = document.querySelector("#thank");

let score = 0;
console.log(numbers, submit);

for (const numberEl of numbers) {
  numberEl.addEventListener("click", function () {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i].classList.contains("picked"))
        numbers[i].classList.remove("picked");
    }
    numberEl.classList.add("picked");
    score = numberEl.innerText;
  });
}

submit.addEventListener("click", function () {
  rating.classList.add("hidden");
  thanks.classList.remove("hidden");

  let rateEl = document.querySelector(".rate");
  rateEl.innerText = `${score}`;
});
