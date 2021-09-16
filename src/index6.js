//1. Hoisting(호이스팅) 이슈
//호이스팅이란, "끌어 올린다."는 의미
//일반적인 언어는 함수, 변수를 선언한 후, 이후 라인에서 해당 함수와 변수를 사용할 수 있으나, 
//js에서는 함수 또는 변수 선언 전에 해당 함수 또는 변수를 사용해도 에러를 내지 않는 현상을 의미

//1-(1) var키워드
//var키워드는 let과 같이 변수 선언에 쓰이는 키워드로, let과 달리 동일한 이름의 변수를 여러번 선언할 수 있음
//var키워드는 참고로만 알아두고 쓰지 않기로 함

var a =1;
var a =2;
a = 3;
console.log(a);

//1-(2) Hoisting 현상과 이유
//호이스팅 현상은 var키워드와 함수 선언에서만 일어남
console.log(a);
a = 10;
console.log(a);
var a =20;

//위의 예시는 다음과 같이 실제로 동작함
var a;
console.log(a);
a = 10;
console.log(a);
a = 20;

//함수의 경우도 동일
getData();
function getData() {
  console.log("Hello World!");
}

//위의 경우에도 실제로는 함수 선언이 맨 위에서 실행된 후, 다음 코드들이 실행됨
function getData() {
  console.log("Hello World!);
}
getData();

//1-(3) Hoisting 이유 
//js는 함수와 변수 선언을 실행 전, 실행 영역의 맨 앞으로 이동해서 실행함
//js의 변수에 대한 실행 lifecycle은 다음과 같음
  //선언(var a;) -> 초기화(a=1;) ->사용(a+=1;)
  //js에서 선언과 초기화 문법을 동시에 쓸 수 있음(var a =1;)
  //하지만, 내부적으로는 js는 함수와 변수 선언 부분만 분리해서, 실행 영역 맨 앞으로 이동해서 실행함
  //따라서, Hoisting현상이 일어난 변수는 변수를 선언만 한 상태이기 때문에, 아직 값이 초기화되지 않아서, 해당 변수는 undefined가 들어가 있음

//1-(4) 해결방안
//A. 변수 선언의 경우, var키워드는 쓰지 않고, let과 const만 사용할 것!
  //codesandbox에서는 let과 const도 하위호환을 위해,var로 변환되어 실행되기 때문에, 
  //동일한 hoisting현상을 볼 수 있으므로, 관련테스트는 크롬 개발자 모드 console등에서 진행
//B. 함수 선언의 경우 함수 표현식으로 사용할 것!
  //함수 선언문과 함수 표현식
  //함수 선언문
  function getData() {
    console.log("Hello World!);
  }
    
  //함수 표현식             
  let getData = function(){
    console.log("Hello World");
  }
    
  //함수 표현식 사용 예
  //getData를 var로 선언할지라도, getData는 함수가 아닌 변수로 인지하므로 에러가 남
  getData();
  let getData = function(){
    console.log("Hello World!");
  }
         
//2. Scope
//js변수 또는 함수 선언시, 해당 변수 또는 함수가 유효한 범위를 의미함
//js scope는 3가지 scope(Global, Function, Block)이 있음
//일반적인 프로그래밍 언어는 전역scope, 함수 scope로 나눠지는데 반해서, 
//js는 블록scope가 추가로 있고, 선언에 따라 유효 범위가 다르므로, 이해할 필요가 있음

//2-(1) Global Scope 전역 스코프
//블록 또는 함수 안에서 선언되지 않고, 외부에서 선언된 변수/함수로 함수 또는 블록 포함 모든 코드에서 사용 가능
//2-(2) let과 const는 블록 scope
//블록 scope는 {}로 이루어진 영역을 의미함
//let과 const로 선언된 변수는 블록 안에서 선언이 되었다면, 블록 밖에서는 유효하지 않음
{
  const name = "Seongmin";
  console.log(name);
}
console.log(name); //unfined 또는 에러

//블록 밖에서 let과 const로 선언된 변수는 블록 안에서도 유효함
let name = "Seongmin";
{
  console.log(name);
}
console.log(name);   

//블록 안에서 또다른 블록이 있을 수 있음    
{
  let item1 = 1;
  {
  let item2 = 2;
  console.log(item1);
  }
}
console.log(item1); //item1이 선언된 블록 밖에 있기 때문에, unfined 또는 에러
 
//if와 for문에서도 블록을 사용하고 있으므로, 해당 블록 안에서 let또는 const로 선언된 변수들은 블록scope가 적용됨
const item1 = 1;
if (item1 === 1){
  let item2 = 2;
  console.log(item2);
}
console.log(item2); //item2가 선언된 블록 밖에서 호출했으므로, undefined 또는 에러 

// 함수 선언도 마찬가지로 함수 내부에서 선언된 함수는 외부에서 호출할 수 없음
{
function getData(){
    let data = 1;
  }
}
console.log(getData());//함수 외부에서 호출했으므로,에러

//2-(3) var키워드와 함수 scope
//var키워드는 함수 scope를 가짐
//함수 안에서 var키워드로 선언된 변수는 함수 외부에서 유효하지 않지만, 
//블록안에서 var키워드로 선언된 변수는 블록 외부에서도 유효함(이를 함수 scope라고 함)
//블록 외부에서 var키워드로 선언된 변수는 당연히 블록 안에서도 참조 가능
var data = 1;
function func(){
  var item = 2;
  console.log(data); //블록 안에서도 정상 동작
}
    
//함수 안에서 var 키워드로 선언된 변수는 함수 외부에서는 참고 불가(일반적인 프로그래밍 언어와 동일)
var data = 1;
function func(){  
  console.log(data); //블록 안에서도 정상 동작
}
func();
console.log(data); 

//함수가 아니라, 블록 안에서 var키워드로 선언된 변수는 블록 외부에서 선언된 변수와 동일하게 취급됨(블록은 무시함)
{
  var item2 = 3;
}

func();
console.log(item2);

//2-(4) 전역변수와 지역변수
//함수에서 선언된 변수를 지역 변수라고 하며, 전역 scope를 가진 변수를 전역변수라고 이야기함
    //동일한 이름을 가진 전역변수와 지역변수가 있으면, 함수 안에서는 지역 변수를 우선해서 사용

var data = 1;
function func(){  
  var data = 2;
  console.log(data); //블록 안에서도 정상 동작
}
func();
console.log(data);
console.log(data); 
