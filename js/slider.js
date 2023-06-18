var mainSwiper = new Swiper('.mainSwiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    watchSlidesProgress: true,
    loop: true
});

var postSwiper = new Swiper('.postSwiper', {
    navigation: {
        nextEl: '.posts-button-next',
        prevEl: '.posts-button-prev',
    },
    spaceBetween: 31,
    slidesPerView: 3,
    loop: true,
});