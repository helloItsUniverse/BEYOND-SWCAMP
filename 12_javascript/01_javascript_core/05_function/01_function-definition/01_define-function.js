/* 01. define-function */

/* function-declaration(함수 선언문 방식) */
function hello(name) {
    return `${name}님 안녕하세요!`;
};

console.log(hello('홍길동'));


/*
  자바스크립트의 함수는 객체 타입의 값으로 값의 설정을 갖는 객체를 일급 객체라고 한다.
  함수는 일급 객체이므로 함수 리터럴로 생성한 함수 객체를 변수에 할당할 수 있다.
 */
/* function-expression(함수 표현식 방식) : 변수명이 함수명이 된다. */
var hello2 = function(name) {
    return `${name}님 안녕하세요!`;
};

console.log(hello2('강감찬'));

/* 함수 이름 뒤에 소괄호를 붙여야 함수를 호출하는 것. */


