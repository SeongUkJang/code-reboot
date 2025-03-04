const swiper = new Swiper(".hero-slider", {
    navigation: {//좌우버튼
        nextEl: ".hero-wrap .next",
        prevEl: ".hero-wrap .prev",
    },
    pagination: {//아래 아이콘
        el: ".hero-wrap .swiper-pagination",
    },
    loop: true,
    autoplay: true,//
    speed: 2000
});