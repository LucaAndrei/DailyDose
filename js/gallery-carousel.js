$(document).ready(function () {
    var swiper = new Swiper('.swiper-container', {
        effect: 'slide',
        speed: 900,
        loop: true,
        slidesPerView: 5,
        spaceBetween: 20,
        autoplay: {
            delay: 5000,
            stopOnLastSlide: false,
            disableOnInteraction: false
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 5
            },
            425: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        }
    })
});