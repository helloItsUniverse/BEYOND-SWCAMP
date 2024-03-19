/* 01. dynamically-typed-language */

/*
  symbol은 ES6에서 추가된 7번째 타입으로 변경 불가능한 원시 타입의 값이다.
  다른 값과 중복되지 않는 유일무이한 값으로 이름 충돌 위험이 없는 객체의 유일한 프로퍼티 키를 만들기 위해 사용한다.
  symbol 이외의 원시 값은 리터럴을 통해 생성하지만 symbol은 Symbol 함수를 통해 호출해 생성한다.
 */

var test;
console.log(typeof test);

test = 1;
console.log(typeof test);

test = 'JavaScript';
console.log(typeof test);

test = true;
console.log(typeof test);

test = null;
console.log(test);

test = {};
console.log(typeof test);

test = [];
console.log(typeof test);

test = function() {};
console.log(typeof test);
