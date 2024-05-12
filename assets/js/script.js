menuBtns.forEach(btn => {
    btn.addEventListener('click', ()=>{
        menuBtns.forEach(btn2 => {
            btn2.classList.remove('active')
        })
        btn.classList.add('active')

        middleItems.forEach(box => {
            if (btn.dataset.box == box.dataset.box) {
                box.classList.add('active');
            } else{
                box.classList.remove('active');
            }
        })
        
        popupShowHide.forEach(popup => {
            if (btn.dataset.popup == popup.dataset.popup) {
                popup.classList.add('active');
            } else{
                popup.classList.remove('active');
            }
        })
    })
})

products.forEach(item => {
    item.addEventListener('click', (e)=>{
        let img = item.querySelector('img').src;
        let name = item.querySelector('.title .info .name').innerHTML;
        let price = item.querySelector('.title .info .price').innerHTML;
        popupShowHide.forEach(popup => {
            if (popup.dataset.popup == 'product') {
                popup.querySelector('img').src = img;
                popup.querySelector('.title .info .name').innerHTML = name;
                popup.querySelector('.title .info .price').innerHTML = price;
                popup.classList.add('active');
            } else{
                popup.classList.remove('active');
            }
        })
    })
})
        
popupShowHide.forEach(popup => {
    popup.addEventListener('click', (e) => {
        if (e.target.classList.contains('popup')) {
            popup.classList.remove('active');
            if (popup.dataset.popup !== 'product'){
                menuBtns.forEach(btn => {
                    if (btn.dataset.box == "home") {
                        btn.click();
                    }
                })
            }
        }
    })
})

fontSizes.forEach(size => {    
    size.addEventListener('click', ()=>{
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

        document.querySelector('html').style.fontSize = fontSize;
    })
})

colorPalette.forEach(color =>{
    color.addEventListener('click', ()=>{
        let colorData = color.dataset.primaryhue;

        colorPalette.forEach(color2 => {
            color2.classList.remove('active')
        })
        color.classList.add('active')

        root.style.setProperty('--primary-color-hue', colorData)
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

const detectDarkMode = event =>{
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

chooseBg.forEach(bg =>{
    bg.addEventListener('click', ()=>{
        let bgData = bg.dataset.bg;
        
        chooseBg.forEach(bg2 => {
            bg2.classList.remove('active')
        })
        bg.classList.add('active')

        if (bgData == 1){
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
    } else{
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

autoNext()