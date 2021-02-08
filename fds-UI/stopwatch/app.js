// DOM
const $btns = document.querySelectorAll('.control');
const $startBtn = $btns[0];
const $resetBtn = $btns[1];
const $display = document.querySelector('.display');
const $lapsBtns = document.querySelectorAll('.lap-title');
const $lapsBtn = $lapsBtns[0];
const $timeBtn = $lapsBtns[1];
const $lapContainer = document.querySelector('.laps');

let minute = 0;
let second = 0;
let millisecond = 0;
let timerId = null;
let times = null;
let lap = 1;

const startTimer = () => {
  millisecond < 99 ? millisecond++ : millisecond = 0;
  if (millisecond === 99) {
    second < 59 ? second++ : second = 0;
    if (second === 59) {
      minute < 59 ? minute++ : minute = 0;
    }
  }
  $display.textContent = `${minute < 10 ? '0' + minute : minute}:${second < 10 ? '0' + second : second}:${millisecond < 10 ? '0' + millisecond : millisecond}`;
  times = $display.textContent;
}

$lapContainer.style.display = 'none';

// Event Handler
$startBtn.addEventListener('click', () => {
  // $startBtn.classList.toggle('stop');
  if ($startBtn.textContent === 'Start') {
    $startBtn.textContent = 'Stop';
    $resetBtn.textContent = 'Lap';
    $resetBtn.removeAttribute('disabled');
    timerId = setInterval(startTimer, 50);
  } else if ($startBtn.textContent === 'Stop') {
    $startBtn.textContent = 'Start';
    $resetBtn.textContent = 'Reset';
    clearInterval(timerId);
  } else if ($startBtn.textContent === 'Stop' && $resetBtn.textContent === 'Reset') {
    $resetBtn.setAttribute('disabled', 'true');
  }
});

$resetBtn.addEventListener('click', () => {
  if ($resetBtn.textContent === 'Lap') {
    $lapContainer.style.display = 'grid';
    const $lap = document.createElement('div');
    const $times = document.createElement('div');
    $lap.textContent = lap++;
    $times.textContent = times;
    $lapContainer.appendChild($lap);
    $lapContainer.appendChild($times);
  } else if ($startBtn.textContent === 'Stop' && $resetBtn.textContent === 'Reset') {
    clearInterval(timerId);
  } else if ($startBtn.textContent === 'Stop') {
    $resetBtn.textContent = 'Reset';
  } else if ($startBtn.textContent === 'Start' && $resetBtn.textContent === 'Reset') {
    $resetBtn.setAttribute('disabled', 'true');
    $lapContainer.style.display = 'none';
    $display.textContent = '00:00:00'
    $lapContainer.innerHTML = '<div class="lap-title">Laps</div><div class="lap-title">Time</div>'
  }
});