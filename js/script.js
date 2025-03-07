const input = document.querySelector('.userInput')
const wordDisplay = document.querySelector('.currentWord')
const btn = document.querySelector('.submitButton')
const msg = document.querySelector('.message')

let word = '사과'
wordDisplay.textContent = word
msg.textContent = '끝말잇기 시작'

function check(){
    const userWord = input.value.trim()
    if(!userWord){
        msg.textContent = '단어를 입력하세요'
        return
    }
}

//     const lastChar = word[word.length -1]
//     console.log(lastChar,userWord[0]);
//     if(lastChar !== userWord[0]){
//         msg.textContent = `"${lastChar}"(으)로 시작되는 단어를 입력하세요` 
//         input.value =''
//     }
//     else{
//         msg.textContent = `성공! 다음 단어를 입력하세요`
//         input.value =''
//         word = userWord
//         wordDisplay.textContent = word
//     }
// }

btn.addEventListener('click',()=>{
    check()
})

input.addEventListener('keypress', (e)=>{
    if (e.key === 'Enter'
    )
    check()
})