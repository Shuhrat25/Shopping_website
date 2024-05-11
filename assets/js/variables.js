const menuBtns = document.querySelectorAll('.sidebar ul li'),
      popupShowHide = document.querySelectorAll('.popup'),
      fontSizes = document.querySelectorAll('.choose-size li'),
      colorPalette = document.querySelectorAll('.choose-color li'),
      chooseBg = document.querySelectorAll('.choose-bg li'),
      middleItems = document.querySelectorAll('.middle'),
      products = document.querySelectorAll('.product');

var root = document.querySelector(':root');
const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');

const nextDom = document.getElementById('next'),
      prevDom = document.getElementById('prev'),
      carouselDom = document.querySelector('.wrap_carousel'),
      listItemDom = document.querySelector('.wrap_carousel .list'),
      thumbnailDom = document.querySelector('.wrap_carousel .thumbnail');