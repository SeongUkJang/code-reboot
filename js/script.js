const guessInput = document.querySelector('#guessInput')
const submitBtn = document.querySelector('#submitButton')
const result = document.querySelector('.result')
const attemptsText = document.querySelector('.attempts')

let attempts = 0

const randomNumber = Math.floor(Math.random()*100)+1
console.log(randomNumber)

// console.log(randomNumber);
submitBtn.addEventListener('click', checkGuess)

guessInput.addEventListener('keyup',(e)=>{
    if(e.key === 'Enter'){
        checkGuess()
    }
})




function checkGuess(){

    const userGuess = parseInt(guessInput.value)
    // console.log(typeof userGuess)
    if(isNaN(userGuess)){
        result.textContent = '숫자를 입력하세요'
        result.style.color = 'orange'
        return
    }
    
    attempts++;
    attemptsText.textContent = attempts
    
    if(userGuess === randomNumber){
        result.textContent = `🎉축하합니다 ! ${attempts}번 만에 맞췄습니다!`
        result.style.color='green'
    }
    else if
        (userGuess < randomNumber){
            result.textContent = `더 큰 숫자를 입력하세요🔼`
            result.style.color = 'blue'
        }
    else if
        (userGuess > randomNumber){
            result.textContent = `더 작은 숫자를 입력하세요🔽`
            result.style.color = 'red'
        }
    guessInput.value=''
    guessInput.focus()
    
}
