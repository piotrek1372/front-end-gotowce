function date() {
  const dayOfWeekEl = document.querySelector(".day-of-week__text");
  const timeEl = document.querySelector(".time__text");
  let time = new Date();

  let dayOfWeek = time.getDay();

  switch (dayOfWeek) {
    case 0:
      dayOfWeek = "Niedziela";
      break;
    case 1:
      dayOfWeek = "Poniedziałek";
      break;
    case 2:
      dayOfWeek = "Wtorek";
      break;
    case 3:
      dayOfWeek = "Środa";
      break;
    case 4:
      dayOfWeek = "Czwartek";
      break;
    case 5:
      dayOfWeek = "Piątek";
      break;
    case 6:
      dayOfWeek = "Sobota";
      break;
  }

  let hour = time.getHours();
  if (hour < 10) hour = "0" + hour;
  let minute = time.getMinutes();
  if (minute < 10) minute = "0" + minute;
  let second = time.getSeconds();
  if (second < 10) second = "0" + second;

  dayOfWeekEl.innerText = dayOfWeek;
  timeEl.innerText = hour + ":" + minute + ":" + second;

  setTimeout("date()", 1000);
}

date();
