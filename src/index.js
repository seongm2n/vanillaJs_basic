let testValue;
testValue = 1;
console.log(testValue);
testValue = 2;
console.log(testValue);

let testValue1 = 1;
console.log(typeof testValue1);
const testValue2 = 1.2;
console.log(typeof testValue2);

let testValue1 = 1 < 2;
console.log(typeof testValue1);
const testValue2 = 1.2;
console.log(typeof testValue2);

let testValue1 = 1 < 2;
console.log(testValue1, typeof testValue1);
const testValue2 = 1.2;
console.log(typeof testValue2);

let testValue;
console.log(typeof testValue, testValue);

let testValue = null;
console.log(typeof testValue, testValue);
let testValue2;
console.log(typeof testValue2, testValue2);

let testSymbol1 = Symbol(1);
let testSymbol2 = Symbol(1);
console.log(typeof testSymbol1, testSymbol1);
console.log(typeof testSymbol1, testSymbol2);

console.log(testSymbol1 == testSymbol2);
console.log(testSymbol1 === testSymbol2);
