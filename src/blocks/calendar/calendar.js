const day = new Date();
const calendarMonth = document.querySelector('.calendar__month');
const calendarBody = document.querySelector('.calendar__body');
const calendarForward = document.querySelector('.calendar__forward');
const calendarBack = document.querySelector('.calendar__back');


let getCalendarMonth = function (element, date) {
  const month = ['Январь', 'Февраль', 'Март', 'Апрель',
    'Май', 'Июнь', 'Июль', 'Август',
    'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  element.textContent = `${month[date.getMonth()]} ${date.getFullYear()}`;
};

let getDay = function (date) {
  let day = date.getDay();
  if (day == 0) day = 7;
  return day - 1;
}

let createCalendar = function (element, date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = new Date(year, month);
  const valueDay = getDay(day);
  let tbody = '<tr>';

  day.setDate(-valueDay + 1)
  for (let i = 0; i < valueDay; i++) {
    tbody += `<td class="calendar__another-month">${day.getDate()}</td>`;
    day.setDate(day.getDate() + 1);
  }

  while (month === day.getMonth()) {
    if (new Date().getDate() === day.getDate() && new Date().getMonth() === day.getMonth() && new Date().getFullYear() === day.getFullYear()) {
      tbody += `<td class="calendar__date calendar__current-day">${day.getDate()}</td>`;
    } else {
      tbody += `<td class="calendar__date">${day.getDate()}</td>`;
    }
    if (day.getDay() === 0) {
      tbody += '</tr><tr>';
    }
    day.setDate(day.getDate() + 1);
  }
  if (day.getDay() !== 1) {
    for (let i = getDay(day); i < 7; i++) {
      tbody += `<td class="calendar__another-month">${day.getDate()}</td>`;
      day.setDate(day.getDate() + 1);
    }
  }

  tbody += '</tr>';
  element.innerHTML = tbody;
};

calendarForward.onclick = function () {
  day.setMonth(day.getMonth() + 1);
  getCalendarMonth(calendarMonth, day);
  createCalendar(calendarBody, day);
};

calendarBack.onclick = function () {
  day.setMonth(day.getMonth() - 1);
  getCalendarMonth(calendarMonth, day);
  createCalendar(calendarBody, day);
};

getCalendarMonth(calendarMonth, day);
createCalendar(calendarBody, day);

const tdCurentMonth = document.querySelectorAll('.calendar__date');


function zam() {
  let click = 0;
  return function () { return click++ };
}

let fun = zam();


for (let i = 0; i < tdCurentMonth.length; i++) {
  tdCurentMonth[i].onclick = function () {
    let select = `${String(this.innerHTML).padStart(2, '0')}.${String(day.getMonth() + 1).padStart(2, '0')}.${day.getFullYear()}`;
    console.log(fun());
  };
}