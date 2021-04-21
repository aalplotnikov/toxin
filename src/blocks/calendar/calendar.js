const day = new Date();
const calendarMonth = document.querySelector('.calendar__month');
let birthday = new Date(2021, 3, 32);

day.setDate(1);

getCalendarMonth = function (element, day) {
  const month = ['Январь', 'Февраль', 'Март', 'Апрель',
    'Май', 'Июнь', 'Июль', 'Август',
    'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  element.textContent = `${month[day.getMonth()]} ${day.getFullYear()}`;
}



createCalendar = function () {
  const calendarBody = document.querySelector('.calendar__body')
  day.setDate(1);
  let month = day.getMonth();

  while (month === day.getMonth()) {
    let tr = document.createElement('tr');
    calendarBody.append(tr);
    let i = 0
    if (day.getDate() === 1 && day.getDay !== 1) {
      calendarBody.append(tr);
      switch (day.getDay()) {
        case 0:
          day.setDate(-5);
          while (month !== day.getMonth()) {
            let td = document.createElement('td');
            td.className = 'calendar__another-month';
            td.innerHTML = day.getDate();
            tr.append(td);
            day.setDate(day.getDate() + 1);
            i++;
          }
          break;
        case 2:
          day.setDate(0);
          while (month !== day.getMonth()) {
            let td = document.createElement('td');
            td.className = 'calendar__another-month';
            td.innerHTML = day.getDate();
            tr.append(td);
            day.setDate(day.getDate() + 1);
            i++;
          }
          break;
        case 3:
          day.setDate(-1);
          while (month !== day.getMonth()) {
            let td = document.createElement('td');
            td.className = 'calendar__another-month';
            td.innerHTML = day.getDate();
            tr.append(td);
            day.setDate(day.getDate() + 1);
            i++;
          }
          break;
        case 4:
          day.setDate(-2);
          while (month !== day.getMonth()) {
            let td = document.createElement('td');
            td.className = 'calendar__another-month';
            td.innerHTML = day.getDate();
            tr.append(td);
            day.setDate(day.getDate() + 1);
            i++;
          }
          break;
        case 5:
          day.setDate(-3);
          while (month !== day.getMonth()) {
            let td = document.createElement('td');
            td.className = 'calendar__another-month';
            td.innerHTML = day.getDate();
            tr.append(td);
            day.setDate(day.getDate() + 1);
            i++;
          }
          break;
        case 6:
          day.setDate(-4);
          while (month !== day.getMonth()) {
            let td = document.createElement('td');
            td.className = 'calendar__another-month';
            td.innerHTML = day.getDate();
            tr.append(td);
            day.setDate(day.getDate() + 1);
            i++;
          }
          break;
      }
    }
    for (; i < 7; i++) {
      let td = document.createElement('td');
      td.className = 'calendar__date';
      td.innerHTML = day.getDate();
      tr.append(td);
      if (month !== day.getMonth()) {
        td.className = 'calendar__another-month';
      }
      if (day.getDate() === new Date().getDate())
        td.className = 'calendar__date calendar__current-day';
      day.setDate(day.getDate() + 1);
    }
  }
}

getCalendarMonth(calendarMonth, day);
createCalendar();

console.log(day)
console.log(birthday)
console.log(day);