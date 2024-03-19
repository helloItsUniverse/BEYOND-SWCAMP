// prototype 과 constructor 함수가 만나 obj 객체 생성
/* 모든 객체는 프로토타입 객체에 접근할 수 있다. */

const user = {
    activate: true,
    login: function() {
        console.log('로그인 되었습니다.');
    }
};

console.log(user.__proto__.constructor === Object); // true
console.log(user.__proto__ === Object.prototype);   // true

const user2 = {
    activate: false,
    login: function() {
        console.log('로그인 실패되었습니다.');
    }
};
console.log(user2.__proto__);

const student = {
    passion: true
};
console.log(student.__proto__);

student.__proto__ = user2;  // 부모 객체를 자신의 [[Prototype]]에 담으면 상속의 개념이 된다.
student.login();            // login은 원래 student 에 없던 것.

/* 프로토타입 체인 */
const greedyStudent = {
    class: 1502,
    __proto__: student
}

console.log(greedyStudent.activate);    // user2 에서 상속받음
console.log(greedyStudent.passion);     // student 에서 상속받음