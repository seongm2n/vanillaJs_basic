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

//길게 여러줄로
let func1 = (name) => {
  console.log('Hi! ' + name);
}
func1('Seongmin');

let func3 = () => {
  console.log('Hi!');
}
func3();

//
let func = function (item1, item2) {
  return item1 * item2;
};

let func2 = (item1, item2) => item1 * item2;
console.log(func2(1, 2));
