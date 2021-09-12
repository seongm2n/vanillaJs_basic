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

// 2. 객체 메서드 선언에 화살표함수를 사용해도 됨
const user = {
  age: 10,
  name: "seongmin",
  details: {
    hobby: "coding",
    major: "logistics",
    get_hobby: () => 'coding' //arrow함수 안에서 값을 직접 지칭
  }
};
console.log(user.details.get_hobby());

// 화살표함수에서는 this가 없음
const user = {
  age: 10,
  name: "seongmin",
  details: {
    hobby: "coding",
    major: "logistics",
    get_hobby: () => this.hobby // 에러 , arrow 함수안에서 this라는 키워드는 객체를 지칭하도록 매핑되지 않기 때문에 쓸 수 없다.
  }
};
console.log(user.details.get_hobby());

//gette(획득자)와 setter(설정자)
//getter는 프로퍼티 값을 접근할 때(읽을 때) 호출되는 메서드
//setter는 프로퍼티 값을 수정할 때(설정할 때) 호출되는 메서드
//getter 선언시 인자가 없어야 하고, setter 선언시 인자가 반드시 하나 있어야 함
get prop(인자없음) {
  ...
}
set prop(한개의 인자) {
  ...
}
//getter는 함수처럼 괄호를 붙이지 않고, 프로퍼티처럼 호출
//setter는 함수처럼 괄호를 붙이지 않고, '='을 사용해서 값을 
const user = {
  age : 10,
  name : "seongmin",
  get get_age(){
    return this.age;
  },
  set set_age(value){
    this.age = value;
  }
};
console.log(user.get_age);
user.set_age = 20;
console.log(user.get_age);
  
//JS 객체 생성 방법2 : newObject()로 생성하는 방식
//기본 객체인 Object()를 기반으로 생성하는 방식
//참고로만 알아두기, ES6 이전 Javascript 언어조차 객체리터럴 방식을 권장
const user = new Object();
 user.age = 10;
 user.name = "seongmin";
 user.get_data = function(){
   return 1+2;
 }
 console.log(user.age, user.name,user.get_data());
  
//JS 객체 생성 방법3 : 생성자 함수로 생성하는 방식
//생성자 함수는 함수를 의미함
//new 함수()를 쓰면, 객체처럼 사용 가능
//참고로만 알아두기
 function User(age,name){
   this.age = age;
   this.name = name;
   this.get_data = function(){
     return this.age;
    }
 }
const seongmin = new User(10, "seongmin");
console.log(typeof seongmin);
console.log(seongmin.age, seongmin.get_data());
  
//프로토타임
//생성자 함수에 프로퍼티 또는 메서드 정의 가능
//'객체이름.prototype.프로퍼티명 = 코드'와 같이 사용 가능
function User(age,name){
  this.age = age;
  this.name = name;
}
User.prototype.message = function(){
  return 'Hello';
}
User.prototype.hobby = 'coding';

const seongmin = new User(10, 'seongmin');
console.log(seongmin.age,seongmin.name, seongmin.hobby );
console.log(seongmin.message());

// 클래스 정의
// class 클래스명 {}으로 클래스 정의 가능
// constructor(): 클래스 셍성자 함수

class User1 {
  constructor(){
    this.name = 'seongmin'; //클래스 프로퍼티는 constructor 내부에서 this 키워드로 선언될 수 있음
    this.age = 27;
  }
  get_message(){ // 클래스 내부에서 메서드 선언 가능
    return 'Hello!';
  }
}
//class로 정의된 클래스는 new 클래스명()으로 객체 생성될 수 있음
const seongmin = new User1();
console.log(typeof seongmin, seongmin.name, seongmin.age, seongmin.get_message());
  
// 객체 생성시 인자 정의는 constructor에서 할 수 있음
class User1 {
  constructor(name, age){ 
    this.name = name;
    this.age = age;
  }
  get_message(){
    return 'Hello!';
  }
}

const seongmin = new User1('seongmin', 27);
console.log(typeof seongmin, seongmin.name, seongmin.age, seongmin.get_message());

//상속도 일반적인 객체 지향 문법과 유사
//extends로 상속할 클래스를 선언
//자식 클래스에서는 super()를 constructor()안에서 호출
//super()는 부모클래스의 constructor()를 호출
class Animal {
  constructor(name){
    this.name = name;
  }
}
class User extends Animal {
  constructor (name, age){
    super(name);
    this.age = age;
  }
}
const seongmin = new User('Seongmin', 27);
console.log(seongmin.name, seongmin.age);

// 객체지향의 다형성
//부모클래스의 메서드명과 동일하지만, 자식 클래스에서 해당 메서드를 덮어씌워 다른 동작을 할 수 있는 기능도 지원
class Animal {
  constructor(name){
    this.name = name;
  }
  get_message() {
    return "Hello";
  }
}

class User extends Animal {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
  get_message(){
    return "Hello World!";
  }
}
const seongmin = new User('Seongmin', 27);
console.log(seongmin.name, seongmin.age, seongmin.get_message());

//hasOwnProperty()사용법
//클래스명.prototype.프로퍼티 = 프로퍼티 값 으로도 클래스 외부에서 프로퍼티 추가 가능
//클래스 내부에서 선언한 프로퍼티임을 확인하기 위해 hasOwnProperty(프로퍼티명)을 사용할 수 있음
//해당 메서드 가끔 언급
class Animal {
  constructor(name){
    this.name = name;
  }
  get_message(){
    return 'Hello';
  }
}

Animal.prototype.age = 10;

const seongmin = new Animal('Seongmin');
console.log(seongmin.hasOwnProperty('name')); //내부 선언 -> true
console.log(seongmin.hasOwnProperty('age'));  //외부 선언 -> false
console.log(seongmin.hasOwnProperty('get_message()'));  //프로퍼티가 아니라 메서드라  -> false
