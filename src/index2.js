//데이터 타입 변환

let testValue = 1;
console.log(typeof Number(testValue), Number(testValue));

let testValue = "1"; //string이지만
console.log(typeof Number(testValue), Number(testValue));  //typeof에서 Number를 명시해줬기 때문에 number로 출력

console.log(parseInt(1.2)); //number로 바꿔주는데 1만 남긴다.
console.log(parseFloat(1.2)); //부동소수점까지 출력
console.log(Number(1.2)); 
console.log(Number("1.2")); //따옴표로 문자열로 만들어도 숫자로 출력

//데이터타입은 number로 표현
console.log(Number("1.2")); 
console.log(parseInt("1.2")); //하지만 parseInt를 했을 경우 정수로 반환
console.log(parseFloat("1.2")); 

//
console.log(String(1.2)); 
console.log(typeof String(1.2), String(1.2)); //문자열 확인
