// DOM
const $second = document.querySelector('.second');
const $minute = document.querySelector('.minute');
const $hour = document.querySelector('.hour');
let secondCount = 1;
let minuteCount = 1;
let hourCount = 1;

setInterval(() => {
  $second.style.transform = `rotate(${6 * secondCount}deg)`;

  if (secondCount < 60) {
    secondCount++;
  } else if (secondCount = 60) {
    secondCount = 1;

    $minute.style.transform = `rotate(${6 * minuteCount}deg)`;
    if (minuteCount < 60) {
      minuteCount++;
      if (!(minuteCount % 2)) {
          if (hourCount < 360) {

            $hour.style.transform = `rotate(${1 * hourCount}deg)`;
            hourCount++;
          } else if (hourCount = 360) {
            hourCount = 1;
          }
        } 
    } else if (minuteCount = 60) {
      minuteCount = 1;
    }
  }
}, 1000);