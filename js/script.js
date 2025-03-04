const menu = document.querySelectorAll('.menu li')
const content = document.querySelectorAll('.content')

let i = 0

init(i)

function init(q) {
    menu[q].classList.add('act')
    content[q].classList.add('content_On')
}

function reset(){
    for(let i=0;i<menu.length;i++){
        menu[i].classList.remove('act')
        content[i].classList.remove('content_On')
    }
}

menu.forEach(function (menu, p){
    menu.addEventListener('click', function(){
        console.log(p);
        reset()
        init(p)
    })
})