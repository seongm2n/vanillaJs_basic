//변수 선언
let testValue;
testValue = 1;
console.log(testValue);
testValue = 2;
console.log(testValue);

const testVaule = 2;
const testValue = 'test';
const testValue = ''; // 일종의 null(없음)을 나타내는 값을 넣을 수도 있음

//에러케이스
const testValue;

//데이터 타입 (Number, String, Boolean, null, undefined, object, Symbol)
//typeof
let testValue1 = 1;
console.log(typeof testValue1);
const testValue2 = 1.2;
console.log(typeof testValue2);

//Boolean
let testValue1 = 1 < 2;
console.log(typeof testValue1);
const testValue2 = 1.2;
console.log(typeof testValue2);

//Boolean, Number
let testValue1 = 1 < 2;
console.log(testValue1, typeof testValue1);
const testValue2 = 1.2;
console.log(typeof testValue2);

//undefined
let testValue;
console.log(typeof testValue, testValue);

//object, undefined
let testValue = null;
console.log(typeof testValue, testValue);
let testValue2;
console.log(typeof testValue2, testValue2);

//Symbol
let testSymbol1 = Symbol(1);
let testSymbol2 = Symbol(1);
console.log(typeof testSymbol1, testSymbol1);
console.log(typeof testSymbol1, testSymbol2);

console.log(testSymbol1 == testSymbol2);
console.log(testSymbol1 === testSymbol2);
