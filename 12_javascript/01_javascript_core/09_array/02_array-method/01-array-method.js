/* 01. array-method */

const foodList = ['물회', '삼계탕', '냉면', '수박', '물회'];

/* indexOf */
console.log(`foodList.indexOf('물회'): ${foodList.indexOf('물회')}`);       // 0
console.log(`foodList.indexOf('삼겹살'): ${foodList.indexOf('삼겹살')}`);   // -1

/* includes */
console.log(`foodList.indexOf('물회'): ${foodList.includes('물회')}`);      // true
console.log(`foodList.indexOf('삼겹살'): ${foodList.includes('삼겹살')}`);  // false

/* ====================================================== */
const chineseFood = ['짜장면', '짬뽕', '탕수육'];

/* push */
chineseFood.push('팔보채');
chineseFood.push('양장피');
console.log(`push 후: ${chineseFood}`);     // push 후: 짜장면,짬뽕,탕수육,팔보채,양장피

/* pop */
// chineseFood.pop();
console.log(`chineseFood.pop(): ${chineseFood.pop()}`);     // chineseFood.pop(): 양장피
console.log(`pop 이후: ${chineseFood}`);    // pop 이후: 짜장면,짬뽕,탕수육,팔보채

/* ====================================================== */
const chickenList = ['양념치킨', '후라이드', '파닭'];

/* unshift */
console.log(`chickenList.unshift(): ${chickenList.unshift('간장치킨')}`);       // chickenList.unshift(): 4
console.log(`chickenList.unshift(): ${chickenList.unshift('마늘치킨')}`);       // chickenList.unshift(): 5

console.log(`unshift 이후: ${chickenList}`);    // unshift 이후: 마늘치킨,간장치킨,양념치킨,후라이드,파닭

/* shift */
console.log(`chickenList.shift(): ${chickenList.shift()}`);     // chickenList.shift(): 마늘치킨

console.log(`shift 이후: ${chickenList}`);      // shift 이후: 간장치킨,양념치킨,후라이드,파닭

/* ====================================================== */

/* concat */
const idol1 = ['서태지와 아이들', '소녀시대'];
const idol2 = ['HOT', '젝스키스'];
const idol3 = ['핑클', '블랙핑크'];

console.log(`idol1 기준으로 idol2 배열을 concat: ${idol1.concat(idol2)}`);  // idol1 기준으로 idol2 배열을 concat: 서태지와 아이들,소녀시대,HOT,젝스키스
console.log(`idol1 기준으로 idol2 배열을 concat: ${[...idol1, ...idol2]}`); // ES6 할 때 스프레드 연산자 배울 때 다시 설명
console.log(`idol3 기준으로 idol1, idol2 배열을 concat: ${idol3.concat(idol1, idol2)}`); // idol3 기준으로 idol1, idol2 배열을 concat: 핑클,블랙핑크,서태지와 아이들,소녀시대,HOT,젝스키스

/* ====================================================== */

/* slice: 배열의 요소 선택 잘라내기 */
const front = ['HTML', 'CSS', 'JavaScript', 'Vue'];
console.log(`front.slice(): ${front.slice(1, 3)}`);     // front.slice(): CSS,JavaScript
console.log(`front: ${front}`);      // front: HTML,CSS,JavaScript,Vue (slice 하여도 원본은 그대로 유지)

/* splice(시작인덱스, 제거할길이, 추가할 값1, 추가할 값2, ...): 배열의 index 위치의 요소 제거 및 추가 */
console.log(`front.splice(3, 1, 'JDBC'): ${front.splice(3, 1, 'JDBC')}`);     // front.splice(3, 1, 'JDBC'): Vue
console.log(`front: ${front}`);                                             // front: HTML,CSS,JavaScript,JDBC (원본에 영향을 줌)

/* join: 배열을 우리가 원하는 구분자와 함께 결합하여, 문자열로 반환 */
const snackList = ['사탕', '초콜렛', '껌', '마이쮸'];
console.log(`snackList.join(''): ${snackList.join('')}`);       // snackList.join(''): 사탕초콜렛껌마이쮸
console.log(`snackList.join('/'): ${snackList.join('/')}`);     // snackList.join('/'): 사탕/초콜렛/껌/마이쮸

