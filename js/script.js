

AOS.init({
    duration: 600, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
});
const headerBtn = document.querySelector('.header-btn')
const fixedTopBtn = document.querySelector('.fixedTop')
const header = document.querySelector('header')//navOpen   , scroll


headerBtn.addEventListener('click', function (e) {
    e.preventDefault()
    header.classList.toggle('navOpen')
})


window.addEventListener('scroll', function () {
    let i = window.scrollY || document.documentElement.scrollTop;
    console.log(i);
    if (i >= 100) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }

})


fixedTopBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})


window.addEventListener('resize', function () {
    const viewport = window.innerWidth

    if (viewport > 799 && header.classList.contains('navOpen')) {
        header.classList.remove('navOpen')
    }
    console.log(viewport)
})




// 1
gsap.to('.dep1 .tit_wrap>*', {
    opacity: 1,
    y: -30,
    duration: 1,
    stagger: .3
})



const dep6Slider = new Swiper(".dep6-slider", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        1110: {
            slidesPerView: 3,
        },
    },
});