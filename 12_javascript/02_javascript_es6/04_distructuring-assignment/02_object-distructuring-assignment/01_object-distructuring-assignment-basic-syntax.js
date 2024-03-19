/* 04-02-01. object-distructuring-assignment-basic-syntax(객제 구조분해 할당) */

let pants = {
    productName: 'baggie_pants',
    color: 'black',
    price: 30000,
    getInfo() {
        console.log(this.productName, '좋아!');
    }
};

/* 구조분해 할당 이전 */
// let productName = pants.productName;
// let color = pants.color;
// let price = pants.price;
// console.log(productName, color, price);

/* 구조분해 할당 이후 */
// let {productName, color, price} = pants;
let {color, productName, price, getInfo} = pants;    // key/value 방식이므로 순서는 바뀌어도 상관없다.
console.log(productName, color, price);     // baggie_pants black 30000

console.log(getInfo);   // [Function: getInfo]
getInfo();              // undefined 좋아!

/* 객체 구조분해 할당으로 꺼낸 변수 대신 다른 것 쓰고 싶다면... */
let {color: co, price: pr, productName: pn} = pants;
console.log(co, pr, pn);