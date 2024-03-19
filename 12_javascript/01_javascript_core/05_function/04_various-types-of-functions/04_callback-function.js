/* 04. callback function콜백 함수 */

/* 전달받은 값에 1을 증가시켜 반환하는 함수 */
function increase(value) {
    return value + 1;
}

/* 전달받은 값에 1을 감소시켜 반환하는 함수 */
function decrease(value) {
    return value - 1;
}

/* 전달받은 함수에 전달받은 값을 적용시켜주는 고차 함수(전달받은 함수를 활용하는 함수) */
function apply(func, value) {
    return func(value);
}

console.log(apply(increase, 5));        // increase 함수를 콜백 함수라고 함
console.log(apply(decrease, 5));        // decrease 함수를 콜백 함수라고 함

/* 배열의 정렬을 다룰 떄의 예시 */
console.log([3, 2, 1, 5, 4].sort(function(left, right) {return right - left}));

/* 비동기 처리(이벤트, 타이머, ajax, fetch, ......)에 활용되는 중요한 패턴이다. */
