/* 02. method */
/* 자바스크립트의 함수는 객체이다. 함수는 값으로 취급할 수 있고 프로퍼티 값으로 사용할 수도 있다. */

var name = '달마시안';      // 전역변수
var dog = {
    name: '뽀삐',
    eat: function(food) {
        console.log(`${name}(은)는 ${food}(을)를 맛있게 먹어요.`);          // this. 이 없으면 전역변수를 뜻한다.
        console.log(`${this.name}(은)는 ${food}(을)를 맛있게 먹어요.`);     // 메소드에서의 this는 메소드를 호출한 객체

        return '77ㅓ억 잘 먹었다';
    }
};
/* this. 은 이 메소드(eat)를 호출한 객체(dog)를 가리킨다. */

console.log(dog.eat('탄알집튀김'));