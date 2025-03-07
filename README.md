# code-reboot

사용자가 1부터 100까지의 숫자를 추측하는 게임을 구현한 코드입니다. 

사용자가 숫자를 입력하고 버튼을 클릭하거나 `Enter` 키를 누르면, 프로그램은 그 숫자가 맞는지, 더 큰 숫자 또는 더 작은 숫자를 입력해야 하는지 알려줍니다. 

아래는 코드의 흐름을 쉽게 설명한 내용입니다.

### 1. **초기 설정**

```jsx
const guessInput = document.querySelector('#guessInput') // 사용자가 숫자를 입력할 input 요소
const submitBtn = document.querySelector('#submitButton') // 제출 버튼
const result = document.querySelector('.result') // 결과를 출력할 요소
const attemptsText = document.querySelector('.attempts') // 시도 횟수를 표시할 요소

let attempts = 0 // 시도 횟수
const randomNumber = Math.floor(Math.random()*100)+1 // 1부터 100까지의 랜덤 숫자 생성

```

- `guessInput`은 사용자가 숫자를 입력하는 필드입니다.
- `submitBtn`은 클릭하여 숫자를 확인하는 버튼입니다.
- `result`는 결과 메시지를 보여줄 부분입니다.
- `attemptsText`는 시도한 횟수를 보여줄 부분입니다.
- `randomNumber`는 사용자가 맞춰야 할 목표 숫자입니다.

### 2. **이벤트 리스너**

```jsx
submitBtn.addEventListener('click', checkGuess) // 버튼 클릭 시 checkGuess 함수 실행
guessInput.addEventListener('keyup', (e) => {
    if(e.key === 'Enter') { // Enter 키를 눌러도 checkGuess 함수 실행
        checkGuess()
    }
})

```

- 버튼을 클릭하거나 `Enter` 키를 누르면 `checkGuess()` 함수가 실행됩니다.

### 3. **checkGuess() 함수**

```jsx
function checkGuess(){
    const userGuess = parseInt(guessInput.value) // 사용자가 입력한 숫자

```

- 사용자가 입력한 값을 `parseInt()`로 숫자로 변환합니다.

```jsx
    if(isNaN(userGuess)){ // 숫자가 아니라면
        result.textContent = '숫자를 입력하세요' // 경고 메시지 표시
        result.style.color = 'orange' // 글자 색을 오렌지로 설정
        return
    }

```

- 사용자가 입력한 값이 숫자가 아니면 경고 메시지를 표시합니다.

```jsx
    attempts++; // 시도 횟수 증가
    attemptsText.textContent = attempts // 시도 횟수 화면에 표시

```

- 시도 횟수를 1 증가시키고 화면에 갱신합니다.

```jsx
    if(userGuess === randomNumber){ // 정답을 맞춘 경우
        result.textContent = `🎉축하합니다 ! ${attempts}번 만에 맞췄습니다!`
        result.style.color='green' // 글자 색을 초록으로 설정
    }
    else if(userGuess < randomNumber){ // 추측한 숫자가 더 작은 경우
        result.textContent = `더 큰 숫자를 입력하세요🔼`
        result.style.color = 'blue' // 글자 색을 파란색으로 설정
    }
    else if(userGuess > randomNumber){ // 추측한 숫자가 더 큰 경우
        result.textContent = `더 작은 숫자를 입력하세요🔽`
        result.style.color = 'red' // 글자 색을 빨간색으로 설정
    }

```

- 사용자가 입력한 숫자가 정답인지 비교하여 결과 메시지를 출력합니다.
- 정답을 맞추면 축하 메시지를, 더 작은 숫자를 입력해야 한다면 파란색 메시지를, 더 큰 숫자를 입력해야 한다면 빨간색 메시지를 출력합니다.

```jsx
    guessInput.value=''; // 입력 필드를 비움
    guessInput.focus() // 입력 필드에 포커스를 맞춤
}

```

- 사용자가 입력한 값을 초기화하고, 다시 입력을 받기 위해 `guessInput`에 포커스를 맞춥니다.

### 코드 흐름 정리

1. 랜덤 숫자가 생성됩니다.
2. 사용자가 숫자를 입력하고 제출 버튼을 누르거나 `Enter` 키를 누르면, `checkGuess()` 함수가 실행됩니다.
3. `checkGuess()` 함수는 사용자가 입력한 숫자가 맞는지 확인하고, 맞으면 축하 메시지를, 틀리면 더 큰 숫자 또는 더 작은 숫자를 입력하라고 안내합니다.
4. 시도 횟수를 증가시키고 화면에 표시합니다.
5. 입력 후에는 입력 필드를 초기화하고 다시 입력을 받도록 포커스를 맞춥니다.

이 게임은 매우 간단한 추측 게임으로, 숫자를 맞출 때까지 계속해서 시도할 수 있습니다.
