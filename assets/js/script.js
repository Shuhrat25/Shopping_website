function middleBoxShow(dataset) {
    middleItems.forEach(box => {
        if (dataset == box.dataset.box) {
            box.classList.add('active');
        } else {
            box.classList.remove('active');
        }
    })
}

menuBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        menuBtns.forEach(btn2 => {
            btn2.classList.remove('active')
        })
        btn.classList.add('active')

        let boxData = btn.dataset.box;

        middleBoxShow(boxData);

        popupShowHide.forEach(popup => {
            if (btn.dataset.popup == popup.dataset.popup) {
                popup.classList.add('active');
            } else {
                popup.classList.remove('active');
            }
        })

        if (btn.dataset.box) {
            localStorage.setItem('nav', boxData);
        }

        favorites.classList.remove('active');
        shoppingCart.classList.remove('active');
    })
})

favorites.addEventListener('click', () => {
    let fvData = favorites.dataset.box;
    middleBoxShow(fvData);
    menuBtns.forEach(btn2 => {
        btn2.classList.remove('active')
    })
    favorites.classList.add('active');
    shoppingCart.classList.remove('active');
    localStorage.setItem('nav', fvData);
})

shoppingCart.addEventListener('click', () => {
    let fvData = shoppingCart.dataset.box;
    middleBoxShow(fvData);
    menuBtns.forEach(btn2 => {
        btn2.classList.remove('active')
    })
    shoppingCart.classList.add('active');
    favorites.classList.remove('active');
    localStorage.setItem('nav', fvData);
})

document.addEventListener('DOMContentLoaded', () => {
    products.forEach(item => {
        let imgSrc = item.querySelector('img').src;
        let name = item.querySelector('.title .info .name').innerHTML;
        let price = item.querySelector('.title .info .price').innerHTML;

        item.addEventListener('click', (e) => {
            popupShowHide.forEach(popup => {
                if (popup.dataset.popup == 'product') {
                    popup.querySelector('img').src = imgSrc;
                    popup.querySelector('.title .info .name').innerHTML = name;
                    popup.querySelector('.title .info .price').innerHTML = price;
                    let favoriteLike = popup.querySelector('.title .comment .icon .fa-heart');
                    let addShopBtn = popup.querySelector('.title .btn');
                    if (!item.classList.contains('like')) {
                        favoriteLike.style.color = 'var(--color-dark)';
                        favoriteLike.classList.add('far');
                        favoriteLike.classList.remove('fas');
                    } else {
                        favoriteLike.style.color = 'var(--color-danger)';
                        favoriteLike.classList.remove('far');
                        favoriteLike.classList.add('fas');
                    }
                    if (!item.classList.contains('shop')) {
                        addShopBtn.innerHTML = 'Add Product';
                    } else {
                        addShopBtn.innerHTML = 'Remove Product';
                    }

                    popup.classList.add('active');
                } else {
                    popup.classList.remove('active');
                }
            })
        })
    })

    popupShowHide.forEach(popup => {
        popup.addEventListener('click', (e) => {
            let popupData = popup.dataset.popup;
            let favoriteLike = popup.querySelector('.title .comment .icon .fa-heart');
            let addShopBtn = popup.querySelector('.title .btn');

            if (e.target.classList.contains('popup')) {
                popup.classList.remove('active');
                menuBtns.forEach(btn => {
                    if (btn.dataset.box == localStorage.getItem('nav')) {
                        btn.click();
                    } else if (localStorage.getItem('nav') == 'like') {
                        favorites.click()
                    } else if (localStorage.getItem('nav') == 'shop') {
                        shoppingCart.click()
                    } else if (!localStorage.getItem('nav')) {
                        if (btn.dataset.box == 'home') {
                            btn.click()
                        }
                    }
                })
            }

            if (popupData == 'product') {
                let imgSrc = popup.querySelector(' .card img').src;
                if (e.target.classList.contains('fa-heart')) {
                    products.forEach(item => {
                        let itemImgSrc = item.querySelector('img').src;
                        if (itemImgSrc == imgSrc) {

                            if (!item.classList.contains('like')) {
                                item.classList.add('like');
                                favoriteLike.style.color = 'var(--color-danger)';
                                favoriteLike.classList.remove('far');
                                favoriteLike.classList.add('fas');
                            } else {
                                item.classList.remove('like');
                                favoriteLike.style.color = 'var(--color-dark)';
                                favoriteLike.classList.add('far');
                                favoriteLike.classList.remove('fas');
                            }
                        }
                    });
                } else if (e.target.classList.contains('btn')) {
                    products.forEach(item => {
                        let itemImgSrc = item.querySelector('img').src;
                        let addShopBtn2 = item.querySelector('.add_btn');
                        if (itemImgSrc == imgSrc) {
                            item.classList.toggle('shop');
                            if (!item.classList.contains('shop')) {
                                addShopBtn.innerText = 'Add Product';
                                addShopBtn2.innerText = 'Add Product';
                            } else {
                                addShopBtn.innerText = 'Remove Product';
                                addShopBtn2.innerText = 'Remove Product';
                            }
                        }
                    })
                }
            }
        })
    })
})

fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        let sizeData = size.dataset.id;
        let fontSize;

        fontSizes.forEach(size2 => {
            size2.classList.remove('active')
        })
        size.classList.add('active')

        if (sizeData == 1) {
            fontSize = '10px';
            root.style.setProperty('--sticky-top-left', '5.4rem')
            root.style.setProperty('--sticky-top-right', '5.4rem')
        } else if (sizeData == 2) {
            fontSize = '13px';
            root.style.setProperty('--sticky-top-left', '5.4rem')
            root.style.setProperty('--sticky-top-right', '-7rem')
        } else if (sizeData == 3) {
            fontSize = '16px';
            root.style.setProperty('--sticky-top-left', '-2rem')
            root.style.setProperty('--sticky-top-right', '-17rem')
        } else if (sizeData == 4) {
            fontSize = '19px';
            root.style.setProperty('--sticky-top-left', '-5rem')
            root.style.setProperty('--sticky-top-right', '-25rem')
        } else if (sizeData == 5) {
            fontSize = '22px';
            root.style.setProperty('--sticky-top-left', '-12rem')
            root.style.setProperty('--sticky-top-right', '-35rem')
        }

        localStorage.setItem('font-size', sizeData);

        document.querySelector('html').style.fontSize = fontSize;
    })
})

colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let colorData = color.dataset.primaryhue;

        colorPalette.forEach(color2 => {
            color2.classList.remove('active')
        })
        color.classList.add('active')

        root.style.setProperty('--primary-color-hue', colorData)
        localStorage.setItem('color', colorData);
    })
})

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBg = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

const detectDarkMode = event => {
    if (event.matches) {
        darkColorLightness = '95%';
        whiteColorLightness = '20%';
        lightColorLightness = '15%';
        changeBg();
    } else {
        darkColorLightness = '17%';
        whiteColorLightness = '100%';
        lightColorLightness = '95%';
        changeBg();
    }
}

chooseBg.forEach(bg => {
    bg.addEventListener('click', () => {
        let bgData = bg.dataset.bg;

        chooseBg.forEach(bg2 => {
            bg2.classList.remove('active')
        })
        bg.classList.add('active')

        if (bgData == 1) {
            darkColorLightness = '17%';
            whiteColorLightness = '100%';
            lightColorLightness = '95%';
            changeBg();
        } else if (bgData == 2) {
            darkColorLightness = '95%';
            whiteColorLightness = '20%';
            lightColorLightness = '15%';
            changeBg();
        } else if (bgData == 3) {
            detectDarkMode(darkModeQuery)
        }

        localStorage.setItem('bg', bgData);
    })
})

darkModeQuery.addEventListener('change', e => detectDarkMode(e))

nextDom.addEventListener('click', () => showSlider('next'));
prevDom.addEventListener('click', () => showSlider('prev'));

let timeRunning = 500;
let timeAutoNext = 7000;
let runTimeOut;
let autoRunTime;

function showSlider(type) {
    let itemSlider = document.querySelectorAll('.wrap_carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.wrap_carousel .thumbnail .item');

    if (type == 'next') {
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('next');
    } else {
        let positionlastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionlastItem])
        thumbnailDom.prepend(itemThumbnail[positionlastItem])
        carouselDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning)
}

function autoNext() {
    clearTimeout(autoRunTime);
    runTimeOut = setTimeout(() => {
        nextDom.click()
        autoNext();
    }, timeAutoNext)
}

window.addEventListener('load', (e) => {
    menuBtns.forEach(btn => {
        if (btn.dataset.box == localStorage.getItem('nav')) {
            btn.click();
        } else if (localStorage.getItem('nav') == 'like') {
            favorites.click()
        } else if (!localStorage.getItem('nav')) {
            if (btn.dataset.box == 'home') {
                btn.click()
            }
        }
    })

    fontSizes.forEach(btn => {
        if (btn.dataset.id == localStorage.getItem('font-size')) {
            btn.click();
        }
    })

    colorPalette.forEach(btn => {
        if (btn.dataset.primaryhue == localStorage.getItem('color')) {
            btn.click();
        }
    })

    chooseBg.forEach(btn => {
        if (btn.dataset.bg == localStorage.getItem('bg')) {
            btn.click();
        }
    })

    setTimeout(() => {
        loader.classList.add('hide');
    }, 1000)

    autoNext();
})

mainSearch.addEventListener('input', () => {
    if (mainSearch.value !== '') {
        searchListBox.classList.add('active')
    } else {
        searchListBox.classList.remove('active')
    }

})

mainSearch.addEventListener('focusout', () => {
    if (document.activeElement !== mainSearch) {
        searchListBox.classList.remove('active');
    }
})