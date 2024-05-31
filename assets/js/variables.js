const menuBtns = document.querySelectorAll('.sidebar ul li'),
      popupShowHide = document.querySelectorAll('.popup'),
      fontSizes = document.querySelectorAll('.choose-size li'),
      colorPalette = document.querySelectorAll('.choose-color li'),
      chooseBg = document.querySelectorAll('.choose-bg li'),
      middleItems = document.querySelectorAll('.middle'),
      products = document.querySelectorAll('.product'),
      loader = document.querySelector('.loader-container'),
      mainSearch = document.getElementById('mainSearch'),
      searchListBox = document.querySelector('.search_list'),
      favorites = document.querySelector('.create .fa-heart'),
      shoppingCart = document.querySelector('.create .fa-shopping-cart'),
      favoritseBox = document.querySelector('.middle[data-box="like"] .product_lists .product_boxes ul'),
      shopBox = document.querySelector('.middle[data-box="shop"] .product_lists .product_boxes ul'),
      profilePhoto = document.querySelector('.profile-photo img'),
      profileMenuBtn = document.querySelectorAll('.profile_menu ul li'),
      form = document.querySelectorAll('.login_popup .card form'),
      formLabel = document.querySelectorAll('.login_popup .card form small span');

var root = document.querySelector(':root');
const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');

const nextDom = document.getElementById('next'),
      prevDom = document.getElementById('prev'),
      carouselDom = document.querySelector('.wrap_carousel'),
      listItemDom = document.querySelector('.wrap_carousel .list'),
      thumbnailDom = document.querySelector('.wrap_carousel .thumbnail');