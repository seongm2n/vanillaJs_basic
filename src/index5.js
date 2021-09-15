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
let data = [1, 2, 3];
const [item1, item2, item3]= data;
console.log(item1, item2);

//대입할 아이템이 없을 경우, undefined로 대입
let data = [1, 2, 3];
const [item1, item2, item3, item4, item5]= data;
console.log(item1, item2, item3, item4, item5);

//콤마를 통해 필요하지 않은 아이템은 건너 뛸수 있음
let data = [1, 2, 3];
const [, , item3, item4, item5]= data;
console.log(item3, item4, item5);

//...이후의 값을 별도의 배열로 출력
let data = [1, 2, 3];
const [item3, ...item4]= data; 
console.log(item3, item4);

//에러 -> ...은 마지막 변수에만 적용이 된다.
let data = [1, 2, 3];
const [item3, ...item4,item5]= data; 
console.log(item3, item4,item5);

//객체와 마찬가지로 기본값을 설정할 수 있음
let data = [1, 2, 3];
const [item3,item4, item5, item6="Seongmin"]= data;
console.log(item3, item4, item5, item6); //디폴트값 출력

//(3) 유용한 구조 분해 할당 문법 활용 팁
//(3)-1. 변수값 교환하기

let a = 1;
let b = 2;
let c = a;
a = b;
b = c;
console.log(a,b);

//위에 부분을 간략하게 쓰면
let a = 1;
let b = 2;
[a,b] = [b,a];
console.log(a,b);

//(3)-2. 함수 리턴시 여러 데이터 넘겨주기
function getData(){
  return[1,2,3];
}

let [a,b,c] = getData();
console.log(a,b,c);

//(3)-3. 문자열 분리해서, 각각의 변수에 대입하기
//split()

//구분할 인자를 넣어주지 않는다고 해서,디폴트로 ' '로 구분되지는 않으므로, 명시적으로 ' '를 인자로 넣어줘야함
let data = "seongmin, shin-coding, coding";
console.log(data.split(' ')); 
console.log(data.split(',')); 

//split()로 문자열을 분리해서, 각각의 변수에 대입하기
let data = "seongmin, shin-coding, coding";
let [name, brand, hobby] = data.split(','); //명시적으로 ''를 인자로 넣어줘야 함
console.log(name,brand); 

//4. Rest 파라미터
//Rest파라미터는 함수 인자 선언 앞에 ...을 붙여서 정의하는 문법
//해당 함수에 전달된 인자 리스트는 하나의 배열로 해당 변수에 넣어짐
function getData(...rest){
  console.log(rest);
}
getData(1, 2, 3, 4, 5);

//명시하는 값 외의 ...rest인 나머지 부분은 보이지 출력x
function getData(...rest){
  let [item1, item2, item3, item4, item5] = rest;
  console.log(item1, item2);
}
getData(1, 2, 3, 4, 5);

// ... -> 나머지
//a와 b 그리고 ...rest부분이 명시되고, 출력할 값은 rest값이라 a와b의 값을 뺀 나머지가 출력
function getData(a,b, ...rest){
  console.log(rest);
}
getData(1, 2, 3, 4, 5); //a:1, b:2, ..rest:3,4,5 

//...변수는 함수의 맨 마지막에 나와야 함
function getData(...rest, a, b) //이와 같은 형태는 안됨
function getData(a, b, ...rest) //반드시 ...변수는 맨 마지막에 나와야 함

//5. Spread 파라미터
