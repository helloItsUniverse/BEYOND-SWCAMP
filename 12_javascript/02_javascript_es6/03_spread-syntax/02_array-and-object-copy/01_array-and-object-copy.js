/* 03-02-01. array-and-onject-copy */

/* 1. 배열 복사 */
let arr = [10, 30, 20];
let arrCopy = arr       // 주소값만 참조하는 얕은 복사
let arrCopy2 = [...arr]; // 깊은 복사

console.log(`arr:`, arr);
console.log(`arrCopy:`, arrCopy);
console.log(`arrCopy2:`, arrCopy2);
console.log(`arr === arrCopy: ${arr === arrCopy}`);
console.log(`arr === arrCopy2: ${arr === arrCopy2}`);

/* 2. 객체 복사 */
let obj = {name: '홍길동', age: 20, addr: '서울시', hobby: ['축구', '농구']};
let objCopy3 = {...obj};    // 사본 만들기

let age = 30;
let objCopy4 = {...obj, age, name};

console.log(obj);
console.log(objCopy4);
console.log(obj === objCopy4);