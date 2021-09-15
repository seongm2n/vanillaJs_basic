//JS + ES6 추가 문법

//1. 삼항연산자
//condition ? exprIfTrue : exprIfFalse

const data = [1,2];

if(data,length === 0) {
  console.log("빈 배열입니다.")
} else {
  console.log("배열이 차있습니다.")
}
//삼항연산자를 써서 위에 if문을 한줄로 표현
data.length === 0 ? console.log("빈 배열"):console.log("배열이 차있음") //true : false

//2. 함수의 기본 인자(파라미터)값 설정
//ES6에서 나온 문법으로, 인자 값을 넣지 않을 시, 디폴트로 인자에 넣어지는 값을 설정할 수 있음

//인자 값을 넣지 않을 시의 이슈
function printData(name) {
  console.log(name);
}
printData(); // 값이 정해지지 않아서 undefined로 출력

//디폴트 인자 값 설정
function printData(item = 1, name = "Seongmin Shin") {
  console.log(item, name);
}
printData();

//3. 구조 분해 할당(비구조화 할당)문법
//이름만 보면 이해하기 어려운 구조 분해 할당은 배열이나 객체의 속성을 해체해서, 값을 개별 변수에 대입할 수 있게 하는 문법
//객체와 배열을 좀 더 쉽게 다루는 문법으로 이해하면 됨

//(1) 객체 구조 분해 할당
const data = {
  name : "Seongmin",
  age : 27,
  hobby : "coding"
};
//동일한 프로퍼티명을 써줘야, 해당 프로퍼티에 맞는 값이 대입됨(내가 가지고 오고 싶은 프로퍼티만 정확히 쓴다.)
let {name, age} = data; 
console.log(name, age);

//프로퍼티명과 다른 변수명을 사용하고자 할 경우, (대입할 프로퍼티명 : 다른 변수명)의 형태로 써줘야 함
let { name: myName, age:myAge} = data; 
console.log(myName, myAge);

// 가져올 프로퍼티명을 다른 변수에 저장하되, 해당 프로퍼티명이 객체 안에 없을 경우, 다른 변수에 디폴트값을 대입하기
let { name: myName, age:myAge, special="python"} = data; 
console.log(myName, myAge, special);

//가져올 프로퍼티가 정의 되어 있지 않을 경우에는 디폴트값으로 대입하게끔 할 수 있다.
let { name: myName, age: myAge = 25} = data; 
console.log(myName, myAge);

//(2) 배열 분해 할당
//배열의 각 아이템을 별도 변수에 할당하는 문법




