# color-change

이 코드는 배경 이미지와 제목을 주기적으로 변경하는 기능을 구현한 것입니다. `play` 버튼을 클릭하면 배경 이미지와 제목이 일정 간격(1초)으로 자동으로 변경되며, `stop` 버튼을 클릭하면 변경이 멈추는 기능입니다.

### 코드 설명

1. **HTML 요소들 선택**
   - `bg`: 배경 이미지를 변경할 요소 (id가 `container`인 요소).
   - `title`: 페이지의 제목을 표시하는 `h1.title` 요소.
   - `playbtn`: `play` 버튼 (`.play` 클래스를 가진 버튼).
   - `stopbtn`: `stop` 버튼 (`.stop` 클래스를 가진 버튼).
   - `bgImage`: 배경 이미지 배열. 각 이미지 경로가 포함되어 있습니다.
   - `titles`: 배경에 맞춰서 표시할 제목 배열.

2. **초기 설정**
   ```javascript
   let i = 0
   bg.style.backgroundImage = `url(${bgImage[i]})`
   title.textContent = titles[i]
   ```
   - `i = 0`: `i`는 현재 인덱스를 나타냅니다. 처음에는 0부터 시작합니다.
   - `bg.style.backgroundImage = ...`: 처음 배경 이미지를 설정합니다.
   - `title.textContent = ...`: 처음 제목을 설정합니다.

3. **`bgchange()` 함수**
   ```javascript
   function bgchange(){
       bg.style.backgroundImage = `url(${bgImage[i]})`
       title.textContent = titles[i].toUpperCase()
       i++

       if (i >= bgImage.length) {
           i = 0
       }
       console.log(`url(${bgImage[i]})`)
   }
   ```
   - `bg.style.backgroundImage = ...`: 배열 `bgImage`의 현재 인덱스에 맞는 이미지를 배경에 설정합니다.
   - `title.textContent = ...`: 배열 `titles`의 현재 인덱스에 맞는 제목을 설정하며, 제목은 대문자로 변환됩니다.
   - `i++`: `i` 값을 1 증가시켜서 다음 인덱스로 넘어갑니다.
   - `if (i >= bgImage.length) { i = 0 }`: 배열의 끝에 도달하면, 처음으로 돌아가게 만듭니다.
   - `console.log(...)`: 현재 설정된 배경 이미지를 콘솔에 출력합니다 (디버깅 용도).

4. **`playbtn` 클릭 시**
   ```javascript
   playbtn.addEventListener('click', function(){
       play = setInterval(bgchange, 1000)
   })
   ```
   - `playbtn`이 클릭되면 `setInterval`로 `bgchange` 함수가 1초마다 실행되도록 합니다. 즉, 1초마다 배경 이미지와 제목이 바뀝니다.

5. **`stopbtn` 클릭 시**
   ```javascript
   stopbtn.addEventListener('click', function(){
       clearInterval(play)
   })
   ```
   - `stopbtn`이 클릭되면, `clearInterval(play)`로 `setInterval`을 멈추고, 배경 이미지와 제목 변경이 중지됩니다.

### 전체적인 흐름
1. 페이지가 로드되면 처음에 배경 이미지와 제목이 설정됩니다.
2. `play` 버튼을 클릭하면 1초마다 배경 이미지와 제목이 변경됩니다.
3. `stop` 버튼을 클릭하면 변경이 멈춥니다.

### 코드 정리

```javascript
// HTML 요소들 선택
const bg = document.querySelector('#container'); // 배경 요소
const title = document.querySelector('h1.title'); // 제목 요소
const playbtn = document.querySelector('.play'); // play 버튼
const stopbtn = document.querySelector('.stop'); // stop 버튼

// 배경 이미지와 제목 배열
const bgImage = [
    './img/1.png',
    './img/2.png',
    './img/3.png',
    './img/4.png'
];
const titles = [
    'hello',
    'javascript',
    'working',
    'study'
];

// 초기 설정
let i = 0;
bg.style.backgroundImage = `url(${bgImage[i]})`;
title.textContent = titles[i];

// 배경 이미지와 제목 변경 함수
function bgchange() {
    bg.style.backgroundImage = `url(${bgImage[i]})`; // 배경 이미지 변경
    title.textContent = titles[i].toUpperCase(); // 제목 변경 (대문자)
    i++; // 인덱스 증가

    // 인덱스가 끝에 도달하면 다시 처음으로
    if (i >= bgImage.length) {
        i = 0;
    }
    console.log(`url(${bgImage[i]})`); // 현재 배경 이미지 로그
}

// play 버튼 클릭 시 자동으로 배경과 제목 변경
let play;
playbtn.addEventListener('click', function() {
    play = setInterval(bgchange, 1000); // 1초마다 bgchange 함수 실행
});

// stop 버튼 클릭 시 배경과 제목 변경 멈추기
stopbtn.addEventListener('click', function() {
    clearInterval(play); // setInterval 멈추기
});
```

### 결론
- 이 코드는 배경 이미지와 제목을 주기적으로 변경할 수 있는 기능을 구현하며, `play`와 `stop` 버튼을 사용하여 이를 제어할 수 있습니다.
