let dropIn = document.querySelectorAll(".search__input")[0];
let dropOut = document.querySelectorAll(".search__input")[1];

dropIn.onclick = function (event) {
  document.querySelector(".search__content").classList.toggle("drop-calendar");
};

dropOut.onclick = function (event) {
  document.querySelector(".search__content").classList.toggle("drop-calendar");
};

let dropSelect = document.querySelector(".search__select");

dropSelect.onclick = function (event) {
  document.querySelector(".search").classList.toggle("drop-select");
}