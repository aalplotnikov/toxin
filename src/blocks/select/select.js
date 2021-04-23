const minusGrown = document.querySelector('.minus-grown');
const plusGrown = document.querySelector('.plus-grown');
const minusChildren = document.querySelector('.minus-children');
const plusChildren = document.querySelector('.plus-children');
const minusBaby = document.querySelector('.minus-baby');
const plusBaby = document.querySelector('.plus-baby');
const grown = document.querySelector('.grown')
const children = document.querySelector('.children')
const baby = document.querySelector('.baby')
const select = document.querySelector('.search__select')

let countGuest = 0;
let countGrown = 0;
let countChildren = 0;
let countBaby = 0;

const change = function (element, number) {
  element.textContent = number;
}

const changeGuest = function (element, number) {
  if (number === 0) {
    element.textContent = 'Сколько гостей';
  } else if (number % 100 > 4 && number % 100 < 21) {
    element.textContent = number + ' гостей';
  } else if (number % 10 > 4 || number % 10 === 0) {
    element.textContent = number + ' гостей';
  } else if (number % 10 == 1 && number % 100 != 11) {
    element.textContent = number + ' гость';
  } else {
    element.textContent = number + ' гостя';
  }
}

minusGrown.onclick = function () {
  if (countGrown !== 0) {
    countGuest--;
    countGrown--;
  }
  change(grown, countGrown);
  changeGuest(select, countGuest);
}

plusGrown.onclick = function () {
  countGuest++;
  countGrown++;
  change(grown, countGrown);
  changeGuest(select, countGuest);
}

minusChildren.onclick = function () {
  if (countChildren !== 0) {
    countGuest--;
    countChildren--;
  }
  change(children, countChildren);
  changeGuest(select, countGuest);
}

plusChildren.onclick = function () {
  countGuest++;
  countChildren++;
  change(children, countChildren);
  changeGuest(select, countGuest);
}

minusBaby.onclick = function () {
  if (countBaby !== 0) {
    countGuest--;
    countBaby--;
  }
  change(baby, countBaby);
  changeGuest(select, countGuest);
}

plusBaby.onclick = function () {
  countGuest++;
  countBaby++;
  change(baby, countBaby);
  changeGuest(select, countGuest);
}