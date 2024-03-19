/* 04-01-01.array-distructuring-assignment-basic-syntax */

/* 구조 분해 할당을 사용해 배열이나 객체를 각각의 변수로 '분해'하여 연결(할당)할 수 있다. */
let nameArr = ['Gildong', 'Hong'];
// let firstName = nameArr[0];
// let lastName = nameArr[1];

let [firstName, lastName] = nameArr;

console.log(firstName, lastName);


/* 반환 값이 배열인 메소드를 활용한 구조분해 할당 1 */
let [firstName2, lastName2] = 'Saimdang Shin'.split(' ');
console.log(firstName2, lastName2);

/* 반환 값이 배열인 메소드를 활용한 구조분해 할당 2 */
let [firstName3, lastName3] = 'Saimdang Shin'.match(/[a-z]+/gi);



/* 구조 분해 할당 시 쉼표를 활용하여 불필요한 배열 요소를 버릴 수도 있다. */
let [firstName4, , lastName4] = ['firstName', 'middleName', 'lastName'];
console.log(firstName4, lastName4);


