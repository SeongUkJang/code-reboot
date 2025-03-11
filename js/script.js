const bg = document.querySelectorAll('.bg-wrap li')//active

let q = 0

bg[q].classList.add('active')




const gallery = new Swiper(".gallery", {
    navigation: {
        nextEl: ".gallery-wrap .swiper-button-next",
        prevEl: ".gallery-wrap .swiper-button-prev",
    },
    loop: true,
    on: {
        activeIndexChange: function () {
            let realIndex = this.realIndex

            console.log(realIndex);

            // bg.forEach(function(item){
            //     item.classList.remove('active')
            // })
            bg.forEach((item) => item.classList.remove('active'))
            bg[realIndex].classList.add('active')

        }
    }
});