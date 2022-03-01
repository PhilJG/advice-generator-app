"use strict";

const number = document.querySelector("#number");
const quote = document.querySelector("#quote");
const btn = document.querySelector("#btn");

const fetchAdvice = function () {
  fetch(`https://api.adviceslip.com/advice`)
    .then((res) => res.json())
    .then(function (data) {
      number.textContent = `Advice #${data.slip.id}`;
      quote.textContent = `"${data.slip.advice}"`;
    });
};

btn.addEventListener("click", fetchAdvice);
// const fetchAdvice = function (quote) {
//   fetch(`https://api.adviceslip.com/advice`).then(function (response) {
//     console.log(response);
//     return response.json();
//   });
// };

// fetchAdvice("quote");
