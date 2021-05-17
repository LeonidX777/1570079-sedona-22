var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggler');
var navList = document.querySelector('.main-nav__list');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navList.classList.contains('main-nav__list--shown')) {
    navList.classList.remove('main-nav__list--shown');
    navToggle.classList.remove('main-nav__toggler--closed');
  } else {
    navToggle.classList.add('main-nav__toggler--closed');
    navList.classList.add('main-nav__list--shown');
  }
});
