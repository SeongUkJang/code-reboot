const $h1 = document.querySelector('h1')
const $container = document.querySelector('#container')//night

$h1.addEventListener('click', function () {
    $container.classList.toggle('night')

    if ($container.classList.contains('night')) {
        $h1.textContent = 'night'
        anime({
            targets: '.space path',
            d: [

                // 초승달 모양
                { value: "M112 182.5C147.01 267.53 229.934 308.461 229.934 308.461C144.904 343.471 47.5928 302.921 12.5831 217.891C-22.4266 132.861 18.1229 35.5497 103.153 0.540039C103.153 0.540039 76.9903 97.4699 112 182.5Z" },

            ],
            easing: 'easeOutQuad',
            duration: 2000,
            loop: false,
            direction: 'alternate',
        });
    } else {
        $h1.textContent = 'day'
        anime({
            targets: '.space path',
            d: [
                // 해 모양
                { value: "M321.461 104.109C356.47 189.139 315.921 286.451 230.891 321.461C145.861 356.47 48.5491 315.921 13.5394 230.891C-21.4703 145.861 19.0792 48.5491 104.109 13.5394C189.139 -21.4703 286.451 19.0792 321.461 104.109Z" },
            ],
            easing: 'easeOutQuad',
            duration: 2000,
            loop: false,
            direction: 'alternate',
        });
    }



})
// classList.toggle()




