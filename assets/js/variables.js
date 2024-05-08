const menuBtns = document.querySelectorAll('.sidebar ul li'),
      popupShowHide = document.querySelectorAll('.popup'),
      fontSizes = document.querySelectorAll('.choose-size li'),
      colorPalette = document.querySelectorAll('.choose-color li'),
      chooseBg = document.querySelectorAll('.choose-bg li');

var root = document.querySelector(':root');
const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)')