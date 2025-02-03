'use strict';

window.addEventListener('DOMContentLoaded', () => {

    function sliderClass(sliderSelector, sliderWrapperSelector, nextSelector, prevSelector, width, slidesSelector) {
        let offset = 0;
        const slider = document.querySelector(sliderSelector),
              sliderWrapper = document.querySelector(sliderWrapperSelector),
              next = document.querySelector(nextSelector),
              prev = document.querySelector(prevSelector),
              slides = document.querySelectorAll(slidesSelector);
        
        slider.style.width = 100 * slides.length + '%';
        slider.style.display = 'flex';
        slider.style.alignItems = 'center';
        slider.style.transition = '0.65s all';
        sliderWrapper.style.overflow = 'hidden';

        slides.forEach(slides => {
            slides.style.width = width;
        });

        next.addEventListener('click', () => {
            if (offset == (+width.slice(0, width.length - 2) * (slides.length - 1))) {
                offset = 0;
            } else {
                offset += +width.slice(0, width.length - 2);
            }

            slider.style.transform = `translateX(-${offset}px)`;
        });

        prev.addEventListener('click', () => {
            if (offset == 0) {
                offset = +width.slice(0, width.length - 2) * (slides.length - 1);
            } else {
                offset -= +width.slice(0, width.length - 2);
            }

            slider.style.transform = `translateX(-${offset}px)`;
        });
    };

    const headerLinks = document.querySelectorAll('.header__link');
    const blocks = document.querySelectorAll('.info__block');
    const chevrons = document.querySelectorAll('.chevron');
    let offsets = [];

    blocks.forEach((block, i) => offsets[i] = block.offsetTop + block.clientHeight + 60);

    headerLinks.forEach((link, i) => {
        link.addEventListener('click', function(e) {
            window.scrollTo({
                top: offsets[i],
                behavior: 'smooth'
            });
        });
    });

    const moreBtns = document.querySelectorAll('.info__item');
    const allTexts = document.querySelectorAll('.info__hide');

    moreBtns.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            if (allTexts[i].style.display === 'flex') {
                allTexts[i].classList.add('hide');
                chevrons[i].style.transform = 'rotate(0deg)';
                setTimeout(() => allTexts[i].style.display = 'none', 450);
            } else {    
                allTexts.forEach(text => {
                    text.classList.add('hide');
                    text.style.display = 'none';
                    chevrons.forEach(chev => chev.style.transform = 'rotate(0deg)')
                    allTexts[i].style.display = 'flex';
                });
    
                allTexts[i].style.display = 'flex';
                chevrons[i].style.transform = 'rotate(-180deg)';
                setTimeout(() => allTexts[i].classList.remove('hide'), 50);
            }

        });
    });

    if (document.querySelectorAll('.realize__info')) {
        const realizeInfo = document.querySelectorAll('.realize__info');

        for (let i = 0; i < realizeInfo.length; i++) {
            if (i % 2 == 0) {
                realizeInfo[i].style.background = '#1341B1';
            }
        }

        const overlay = document.querySelector('.overlay');
        const overlayImg = overlay.querySelector('.overlay__img');
        const html = document.querySelector('html');

        document.querySelectorAll('.realize__img').forEach(img => {
            img.addEventListener('click', (e) => {
                overlay.style.opacity = 1;
                overlay.style.visibility = 'visible';
                html.style.overflow = 'hidden';
                overlayImg.src = e.target.src;
            });
        });

        overlay.addEventListener('click', () => {
            overlay.style.opacity = 0;
            overlay.style.visibility = 'hidden';
            html.style.overflow = 'scroll';
            setTimeout(() => overlayImg.src = '', 500);
        })

        sliderClass('.slider-5-m-wrapper', '.slider-5-m', '.next-5-m', '.prev-5-m', window.getComputedStyle(document.querySelector('.slider-5-m')).width, '.slide-5-m');
        sliderClass('.slider-5-i-wrapper', '.slider-5-i', '.next-5-i', '.prev-5-i', window.getComputedStyle(document.querySelector('.slider-5-i')).width, '.slide-5-i');
        sliderClass('.slider-6-i-wrapper', '.slider-6-i', '.next-6-i', '.prev-6-i', window.getComputedStyle(document.querySelector('.slider-6-i')).width, '.slide-6-i');
        sliderClass('.slider-6-m-wrapper', '.slider-6-m', '.next-6-m', '.prev-6-m', window.getComputedStyle(document.querySelector('.slider-6-m')).width, '.slide-6-m');
        sliderClass('.slider-7-i-wrapper', '.slider-7-i', '.next-7-i', '.prev-7-i', window.getComputedStyle(document.querySelector('.slider-7-i')).width, '.slide-7-i');
        sliderClass('.slider-7-f-wrapper', '.slider-7-f', '.next-7-f', '.prev-7-f', window.getComputedStyle(document.querySelector('.slider-7-f')).width, '.slide-7-f');
        sliderClass('.slider-7-m-wrapper', '.slider-7-m', '.next-7-m', '.prev-7-m', window.getComputedStyle(document.querySelector('.slider-7-m')).width, '.slide-7-m');
        sliderClass('.slider-8-m-wrapper', '.slider-8-m', '.next-8-m', '.prev-8-m', window.getComputedStyle(document.querySelector('.slider-8-m')).width, '.slide-8-m');
        sliderClass('.slider-8-f-wrapper', '.slider-8-f', '.next-8-f', '.prev-8-f', window.getComputedStyle(document.querySelector('.slider-8-f')).width, '.slide-8-f');
        sliderClass('.slider-8-i-wrapper', '.slider-8-i', '.next-8-i', '.prev-8-i', window.getComputedStyle(document.querySelector('.slider-8-i')).width, '.slide-8-i');
        sliderClass('.slider-9-m-wrapper', '.slider-9-m', '.next-9-m', '.prev-9-m', window.getComputedStyle(document.querySelector('.slider-9-m')).width, '.slide-9-m');
        sliderClass('.slider-9-f-wrapper', '.slider-9-f', '.next-9-f', '.prev-9-f', window.getComputedStyle(document.querySelector('.slider-9-f')).width, '.slide-9-f');
        sliderClass('.slider-9-i-wrapper', '.slider-9-i', '.next-9-i', '.prev-9-i', window.getComputedStyle(document.querySelector('.slider-9-i')).width, '.slide-9-i');
        sliderClass('.slider-10-f-wrapper', '.slider-10-f', '.next-10-f', '.prev-10-f', window.getComputedStyle(document.querySelector('.slider-10-f')).width, '.slide-10-f');
        sliderClass('.slider-10-m-wrapper', '.slider-10-m', '.next-10-m', '.prev-10-m', window.getComputedStyle(document.querySelector('.slider-10-m')).width, '.slide-10-m');
    }
});
