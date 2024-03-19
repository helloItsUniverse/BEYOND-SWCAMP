/* 04-02-03. function-parameters */

let exampleProduct = {
    items: ["Coffee", "Donut"],
    producer: '신사임당'
};

function displayProduct ({producer = '아무개', items = [], width = 10, height = 20}) {
    console.log(producer);      // 신사임당
    console.log(items);         // [ 'Coffee', 'Donut' ]
    console.log(width);     // 10
    console.log(height);        // 20
}

displayProduct(exampleProduct);

/* 함수 호출 시 객체를 던지면 매개변수로 적힌 구조분해 할당이 일어난다. */