//함수

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
