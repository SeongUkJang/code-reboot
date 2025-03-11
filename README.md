# swiper-callback

이 코드는 Swiper 슬라이드와 관련된 기능을 구현한 것으로, 슬라이드가 바뀔 때마다 `.bg-wrap li` 요소에 `active` 클래스를 추가하거나 제거하는 방식입니다. 각 부분을 쉽게 설명하고 정리해드릴게요!

### 코드 설명

1. **`bg` 선택**
   ```javascript
   const bg = document.querySelectorAll('.bg-wrap li')
   ```
   - `.bg-wrap li` 요소들을 모두 선택하여 `bg` 배열에 저장합니다. 이 배열은 슬라이드의 배경 이미지나 스타일을 변경하는 데 사용됩니다.

2. **`q` 초기값 설정**
   ```javascript
   let q = 0
   bg[q].classList.add('active')
   ```
   - 처음에 첫 번째 슬라이드(`q = 0`)가 활성화되도록 `active` 클래스를 첫 번째 `.bg-wrap li`에 추가합니다.

3. **Swiper 인스턴스 생성**
   ```javascript
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
               
               // 기존 active 클래스 제거 후 새로운 active 클래스 추가
               bg.forEach((item) => item.classList.remove('active'))
               bg[realIndex].classList.add('active')
           }
       }
   });
   ```
   - `gallery`라는 Swiper 슬라이드를 설정합니다.
   - `navigation` 옵션으로 슬라이드를 전환할 수 있는 이전/다음 버튼을 설정합니다.
   - `loop: true` 옵션으로 슬라이드가 끝나면 처음으로 돌아가도록 설정합니다.
   - `on: { activeIndexChange: function() {...} }` 이벤트 핸들러에서 슬라이드가 변경될 때마다 실행됩니다:
     - `realIndex = this.realIndex`: 현재 활성화된 슬라이드의 실제 인덱스를 가져옵니다.
     - `bg.forEach((item) => item.classList.remove('active'))`: 모든 `.bg-wrap li` 요소에서 `active` 클래스를 제거합니다.
     - `bg[realIndex].classList.add('active')`: 현재 활성화된 슬라이드에 해당하는 `.bg-wrap li` 요소에 `active` 클래스를 추가합니다.

### 전체적인 흐름
- 처음에는 첫 번째 `.bg-wrap li`에 `active` 클래스가 추가되어 보여집니다.
- Swiper 슬라이드가 변경되면, 해당 슬라이드에 맞는 `.bg-wrap li`에 `active` 클래스를 추가하고, 나머지 `.bg-wrap li`에는 `active` 클래스를 제거합니다.

### 코드 정리

```javascript
// .bg-wrap li 요소들을 모두 선택
const bg = document.querySelectorAll('.bg-wrap li');

// 첫 번째 슬라이드에 active 클래스 추가
let q = 0;
bg[q].classList.add('active');

// Swiper 설정
const gallery = new Swiper(".gallery", {
    navigation: {
        nextEl: ".gallery-wrap .swiper-button-next",
        prevEl: ".gallery-wrap .swiper-button-prev",
    },
    loop: true, // 슬라이드가 끝나면 처음으로 돌아가기
    on: {
        activeIndexChange: function () {
            // 현재 슬라이드 인덱스 가져오기
            let realIndex = this.realIndex;
            console.log(realIndex);

            // 모든 .bg-wrap li에서 active 클래스 제거
            bg.forEach((item) => item.classList.remove('active'));

            // 현재 인덱스에 해당하는 .bg-wrap li에 active 클래스 추가
            bg[realIndex].classList.add('active');
        }
    }
});
```

### 결론
- 이 코드는 Swiper 슬라이드의 현재 인덱스에 맞게 `.bg-wrap li` 요소에 `active` 클래스를 추가/제거하는 기능을 구현합니다.
- Swiper 슬라이드가 변경될 때마다 배경 이미지나 스타일 등을 동적으로 변경할 수 있습니다.
