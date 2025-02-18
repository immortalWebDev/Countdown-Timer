const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const mins = document.querySelector(".mins");
const secs = document.querySelector(".secs");

const targetDate = new Date("1 Jan 2026 00:00");

const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

const updateCountdown = (deadline) => {
  const currentTime = new Date();
  const timeDiff = deadline - currentTime;

  // console.log(timeDiff)
  let calSec = Math.floor(timeDiff / 1000) % 60;
  let calMin = Math.floor(timeDiff / 1000 / 60) % 60;
  let calHour = Math.floor(timeDiff / 1000 / 60 / 60) % 24;
  let calDay = Math.floor(timeDiff / 1000 / 60 / 60 / 24);

  days.textContent = formatTime(calDay);
  hours.textContent = formatTime(calHour);
  mins.textContent = formatTime(calMin);
  secs.textContent = formatTime(calSec);
};

const countDown = (targetDate) => {
  setInterval(() => updateCountdown(targetDate), 1000);
};

countDown(targetDate);
