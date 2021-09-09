//데이터 타입 변환

let testValue = 1;
console.log(typeof Number(testValue), Number(testValue));

let testValue = "1"; //string이지만
console.log(typeof Number(testValue), Number(testValue));  //typeof에서 Number를 명시해줬기 때문에 number로 출력

//Number타입으로 변환하되 정수로 만듬
console.log(parseInt(1.2)); //number로 바꿔주는데 1만 남긴다.
console.log(parseInt("1.2"));

//Number타입으로 변환, 부동소숫점까지 그대로 데이터변환
console.log(parseFloat(1.2)); //부동소수점까지 출력
console.log(parseFloat("1.2"));

//Number타입으로 변환
console.log(Number(1.2)); 
console.log(Number("1.2")); //따옴표로 문자열로 만들어도 숫자로 출력

//String 타입으로 변환
console.log(String(1.2)); 
console.log(typeof String(1.2), String(1.2)); //문자열 확인

// 0이 아닌수는 true, Boolean타입으로 변환
console.log(typeof Boolean(0), Boolean(0)); // 0은 false를 반환
console.log(typeof Boolean(-1), Boolean(-1)); // -1은 true를 반환
console.log(typeof Boolean(1), Boolean(1)); // 1은 true를 반환

//동등연산자(==,!=), 일치연산자(===,!==)

console.log("" == "0"); //false
console.log(0 == ""); //true
console.log(0 == "0"); //true
console.log(false == "false"); //false
console.log(false == "0"); //true
console.log(false == undefined); //false
console.log(false == null); //false
console.log(null == undefined); //true
console.log("\t\r\n" == "0"); //true
console.log("---------");
//애매한 경우 없이 명확한 답 ,일치연산자(===,!==)만 쓰기로
console.log("" === "0"); //false
console.log(0 === ""); //false
console.log(0 === "0"); //false
console.log(false === "false"); //false
console.log(false === "0"); //false
console.log(false === undefined); //false
console.log(false === null); //false
console.log(null === undefined); //false
console.log("\t\r\n" === "0"); //false

//사칙연산 ( +, -, *, /)
console.log((100 + 1) * 100);

//++연산자 (js, c언어)
let value1 = 1;
console.log(value1++ === 2); // (1) value1 === 2 ->false , (2) value1= value1 + 1 === 2
console.log(++value1 === 3); // (3) value1 +  1 === 3 -> true

//대입연산자
let value10 = 1;
value10 = 1;
console.log(value10);//1
value10 -= 1; // value10 = value10 - 1
console.log(value10); // 0
value10 *= 5; // value10 = value10 * 5
console.log(value10);// 0 
value10 /= 5; // value10 = value10 / 5
console.log(value10); // 0

//논리연산자
// !:NOT
let value2 = false;
console.log(!value2);
// && : AND -> 조건) 둘 다 true일때
let value3 = true && true;
let value4 = false && true;
console.log(value3, value4);
// || : OR -> 조건) 둘 중 하나 true일때
let value5 = true || true;
let value6 = false || true;
console.log(value5, value6);

//문자열 연산 -> +로 문자를 연결할 수 있음
let string12 = "Hello";
console.log(string12 + " world!");

//조건문
let age = 19;
if (age >= 19) {
  console.log("성인입니다");
}
