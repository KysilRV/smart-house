'use strict';

window.addEventListener('DOMContentLoaded', () => {
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
    const allTexts = document.querySelectorAll('.info__text');

    moreBtns.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            if (allTexts[i].style.display === 'block') {
                allTexts[i].classList.add('hide');
                chevrons[i].style.transform = 'rotate(0deg)';
                setTimeout(() => allTexts[i].style.display = 'none', 450);
            } else {    
                allTexts.forEach(text => {
                    text.classList.add('hide');
                    text.style.display = 'none';
                    chevrons.forEach(chev => chev.style.transform = 'rotate(0deg)')
                    allTexts[i].style.display = 'block';
                });
    
                allTexts[i].style.display = 'block';
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
    }
});
