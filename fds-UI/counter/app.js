// DOM
// const $container = document.querySelector('.container');
const $increase = document.querySelector('.increase');
const $decrease = document.querySelector('.decrease');

const counter = (() => {
  const $counter = document.querySelector('.counter');

  return {
    increase() {
      $counter.textContent++;
    },
    decrease() {
      if ($counter.textContent <= 0) return;
      $counter.textContent--;
    }
  }
})();

// $container.addEventListener('click', e => {
//   if (e.target.matches('.increase')) counter.increase();
//   if (e.target.matches('.decrease')) counter.decrease();
// });
$increase.addEventListener('click', e => {
  counter.increase();
});
$decrease.addEventListener('click', e => {
  counter.decrease();
});