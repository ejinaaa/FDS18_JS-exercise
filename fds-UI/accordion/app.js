// DOM
const $submenu = document.querySelectorAll('.submenu');

// Functions
const init = () => {
  $submenu[0].style.height = `${$submenu[0].scrollHeight}px`;
};

const activateMenu = $targetMenu => {
  [...document.querySelectorAll('.menu-container')].forEach(menu => menu.classList.remove('active'));
  $targetMenu.classList.add('active');
}

const collapseMenu = $targetSubmenu => {
  [...$submenu].forEach(submenu => submenu.style.height = submenu.closest('.menu-container').classList.contains('active') ? `${$targetSubmenu.scrollHeight}px` : 0);
};

// Event Handlers
document.addEventListener('DOMContentLoaded', init);

document.querySelector('.accordion').addEventListener('click', e => {
  if (!e.target.matches('.menu-container .menu') && !e.target.matches('.menu-container i')) return;

  const $targetMenu = e.target.closest('.menu-container');

  activateMenu($targetMenu);
  collapseMenu($targetMenu.children[1]);
});