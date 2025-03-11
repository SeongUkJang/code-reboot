const bg = document.querySelector('#container')
const title = document.querySelector('h1.title')
const playbtn = document.querySelector('.play')
const stopbtn = document.querySelector('.stop')
const bgImage = [
    './img/1.png',
    './img/2.png',
    './img/3.png',
    './img/4.png'
]
const titles = [
    'hello',
    'javascript',
    'working',
    'study'
]

let i = 0
bg.style.backgroundImage=`url(${bgImage[i]})`
title.textContent= titles[i]

let play;

function bgchange(){

    bg.style.backgroundImage = `url(${bgImage[i]})`
    title.textContent = titles[i].toUpperCase()
    i++

    if (i >= bgImage.length) {
        i = 0
    }
    console.log(`url(${bgImage[i]})`)
}

playbtn.addEventListener('click',function(){
    play = setInterval(bgchange, 1000) 
})

stopbtn.addEventListener('click',function(){
    clearInterval(play)
})