//함수와 객체

//함수 기본 1
function FunCoding(name) {
  console.log(name);
}

FunCoding("seongmin");

// 함수 기본 2
function FunCoding(name) {
  console.log('Hi, ' + name + '!');
}

FunCoding("seongmin");

// 함수 기본 2 ->  return 키워드 사용
function FunCoding(name) {
  return 'Hi!' + name;
}

console.log(FunCoding("seongmin"));

//ES6 화살표 함수 (Arrow function, '=>') 선언
//익명 함수
let func = (name) => console.log('Hi! ' + name);

func('Seongmin');

//다음 세가지 단축 문법 지원
//function 키워드 생략 가능
//함수 인자가 하나 뿐이면, 괄호() 생략 가능
//함수 코드가 한 라인이라면, 코드 블록 기호(중괄호) 및 return 키워드 생략 가능

// 길게 여러줄로 하면
let func1 = (name) => {
  console.log('Hi! ' + name);
}
func1('Seongmin');

let func3 = () => {
  console.log('Hi!');
}
func3();

// 다음 두 함수 선언은 동일한 선언
let f2 = function(age){
  return age * 2;
}
console.log(f2(1));

let f3 = age => age * 2;

console.log(f3(1));


// 다음 두 함수 선언은 동일한 선언
let func = function (item1, item2) {
  return item1 * item2;
};
console.log(func(1, 3));

let func2 = (item1, item2) => item1 * item2;
console.log(func2(1, 2));

//객체
//프로퍼티(일종의 변수)와, 메서드(일종의 함수)로 이룸
//프로퍼티 => 프로퍼티 키(key)와 프로퍼티 값(value)로 구성
//메서드 => 객체가 가지고 있는 함수
//JS 객체 생성 방법 : 객체 리터럴, newObject()로 생성, 생성자 함수로 생성

//JS 객체 생성 방법1 : 객체 리터럴
//{}괄호 안에 프로퍼티 키 : 프로퍼티 값으로 필요한 프로퍼티를 정의하면 됨
//프로토타입 기반 객체 지향 언어
//JSON, 파이썬 사전(dictionary)와 유사한 측면

const 객체이름 = {
  프로퍼티 키 : 프로퍼티값,
  .
  .
};

//객체예시1
const user = {
  age: 20,
  name: "seongmin"
};
console.log(typeof user, user); // object -> {age:20, name:"seongmin"}
console.log(user.age); //20
console.log(user.name); // seongmin
user.age = 25; //해당 프로퍼티 수정
console.log(user.age); //25

//객체예시2->메서드
const user = {
  age: 20,
  name: "seongmin",
  get_data: function(){ 
    return 1+2;
  }
};
console.log(typeof user, user); // object -> {age:20, name:"seongmin"}
console.log(user.age); //20
console.log(user.name); // seongmin
console.log(user.get_data()); //3

// 빈 객체 선언 후 프로퍼티와 메서드 추가 가능
const emptyObject = {};

emptyObject.name = 'Seongmin';
emptyObject.age = 10;
emptyObject.get_data = function() {
  return 1+2;
};

console.log(emptyObject.age, emptyObject.name, emptyObject.get_data());

//객체 안에서 객체를 정의 가능
const user = {
  age: 10,
  name: "Dave",
  details: {
    hobby: "coding",
    major: "logistic",
    get_details: function(item){
      return item * 2;
    }
  }
};
console.log(user.age, user.name, );
console.log(user.details.hobby, user.details.major, user.details.get_details(2));

//객체 리터럴 사용시 유의사항
// 1. 객체 리터럴과 this키워드
//this 키워드는 자신의 객체를 가리킴
const user = {
  age: 10,
  name: "seongmin",
  details: {
    hobby: "coding",
    major: "logistics",
    get_hobby: function () {
      return this.hobby;
    }
  }
};
console.log(user.details.get_hobby());

// 2. 객체 메서드 선언에 화살표함수를 사용해도 
