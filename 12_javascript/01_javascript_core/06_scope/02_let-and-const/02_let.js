/* 02. let */

/* 1. 변수 중복 선언 금지 */
let msg = '안녕';

// let msg = '잘가';

/* 2. 함수 레벨 스코프 -> 블럭 레벨 스코프 */
let i = 0;
for(let i = 0; i < 10; i++) {

}
console.log(i);     // 0

/* 3. 변수 호이스팅을 방지하는 효과 */
console.log(x);     // ReferenceError: Cannot access 'x' before initialization
let x = 1;          // 실제로 변수 호이스팅이 일어나긴 하지만 내부 알고리즘에 의해 막아준다.