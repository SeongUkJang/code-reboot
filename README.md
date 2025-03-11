#끝말잇기

이 코드는 "끝말잇기" 게임의 기본적인 기능을 구현한 JavaScript입니다. 각 부분을 쉽게 설명하고 정리해드릴게요!

### 코드 설명

1. **HTML 요소들 선택**
   - `input`: 사용자가 단어를 입력하는 텍스트 박스.
   - `wordDisplay`: 현재 단어를 화면에 표시하는 곳.
   - `btn`: 제출 버튼.
   - `msg`: 게임의 상태나 메시지를 표시하는 곳.

2. **초기 설정**
   - `word = '사과'`: 게임이 시작할 때 처음 보여줄 단어는 '사과'입니다.
   - `wordDisplay.textContent = word`: 화면에 '사과'를 표시합니다.
   - `msg.textContent = '끝말잇기 시작!'`: 게임 시작 메시지를 화면에 표시합니다.

3. **`check()` 함수**: 사용자가 입력한 단어가 끝말잇기 규칙을 만족하는지 확인합니다.
   - `input.value.trim()`: 사용자가 입력한 단어를 가져오고 앞뒤 공백을 제거합니다.
   - 단어가 비어있으면 "단어를 입력하세요!"라는 메시지를 띄웁니다.
   - `word.at(-1)`: 이전 단어의 마지막 글자를 가져옵니다.
   - 사용자가 입력한 단어가 이전 단어의 마지막 글자와 첫 글자가 맞지 않으면, "○○(으)로 시작되는 단어를 입력하세요"라는 메시지를 띄우고 입력값을 초기화합니다.
   - 맞으면 "성공~ 다음 단어를 입력하세요" 메시지를 띄우고, `word`를 새 단어로 업데이트한 뒤, 단어를 화면에 표시합니다.

4. **`keypress` 이벤트**: 사용자가 Enter 키를 눌렀을 때 `check()` 함수가 실행되도록 합니다.

5. **`click` 이벤트**: 제출 버튼을 클릭하면 `check()` 함수가 실행됩니다.

---

### 전체적인 흐름
- 게임이 시작되면 '사과'라는 단어가 화면에 표시되고, "끝말잇기 시작!" 메시지가 나옵니다.
- 사용자가 단어를 입력하고 Enter 키를 누르거나 제출 버튼을 클릭하면 `check()` 함수가 실행됩니다.
- 단어가 끝말잇기 규칙에 맞으면 새로운 단어가 표시되고, 맞지 않으면 입력을 다시 받게 됩니다.

### 코드 정리

```javascript
// HTML 요소들
const input = document.querySelector('.userInput')
const wordDisplay = document.querySelector('.currentWord')
const btn = document.querySelector('.submitButton')
const msg = document.querySelector('.message')

// 초기 단어 설정
let word = '사과'
wordDisplay.textContent = word
msg.textContent = '끝말잇기 시작!'

// 끝말잇기 체크 함수
function check() {
    const userWord = input.value.trim()

    // 입력이 없을 경우
    if (!userWord) {
        msg.textContent = '단어를 입력하세요!'
        return
    }

    // 마지막 글자 확인
    const lastChar = word.at(-1)

    // 끝말잇기 규칙에 맞지 않으면
    if (lastChar !== userWord[0]) {
        msg.textContent = `"${lastChar}"(으)로 시작되는 단어를 입력하세요`
        input.value = ''
    } else {
        // 끝말잇기 규칙을 만족하면
        msg.textContent = '성공~ 다음 단어를 입력하세요'
        word = userWord
        wordDisplay.textContent = word
        input.value = ''
    }
}

// Enter 키를 눌렀을 때
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        check()
    }
})

// 제출 버튼 클릭 시
btn.addEventListener('click', () => {
    check()
})
```

이 코드는 끝말잇기 게임을 위해, 단어가 끝말잇기 규칙을 만족하는지 확인하고, 사용자에게 피드백을 주는 방식으로 작동합니다.
