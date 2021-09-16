//1. 동기적 처리와 비동기적 처리
//Synchronous(동기):요청을 보낸 후, 해당 요청의 응답을 받아야 다음 동작을 실행(코드를 한줄 실행 완료후,다음 중 실행)
//Asynchronous(비동기):요청을 보낸 후, 응답과 관계없이 다음 동작을 실행(코드를 한줄 실행 후, 완료와 상관없이 다음 줄 실행)

//(1) 비동기적 처리의 이해
//대부분의 프로그래밍 언어는 동기적 처리를 지향
//하지만, js의 경우는 실행이 오래 걸리는 동작의 경우, 이를 온전히 기다릴 필요없이 다음 작업 실행이 가능하도록, 비동기적인 처리도 가능하도록 되어 있음
//따라서 js는 다른 언어와 마찬가지로 동기적 처리가 기본, 일부 기능은 비동기적으로 처리가 가능하도록 관련 기능을 추가로 제공하고 있다고 이해하면 좋음

//(2) 주요 비동기적 처리
//오래 걸리는 기능은 비동기적으로 처리됨
//Rest API요청, 파일/데이터베이스 처리, 타이머, 암호화/복호화 등

//(3) 비동기 처리 예(setTimeout 함수)
//setTimeout()
setTimeout(function, milliseconds) //milliseconds : ms만큼 기다리기, function: milliseconds에서 설정한 ms만큼 기다린 후, 호출할 함수

//코드 예
console.log("안녕하세요");
setTimeout(() => {
  console.log("Seongmin Shin 입니다.")
}, 3000);
console.log("신성민입니다.")

//(4) 비동기 처리의 문제점
//예를 들어, RestAPI를 호출해서 결과값을 받아서, 이를 기반으로 코드를 실행하는 경우를 생각해보기로 함
//해당 함수 호출 후, 결과값을 받지 않은 채로, 다음 코드가 실행되면, 전체코드 실행에 문제가 됨

//(5) 비동기 처리의 문제점을 해결할 수 있는 콜백함수(Callback Function)
//콜백 함수 설정
//js에서는 함수는 first-class function 
//(first-class function은 파이썬 백엔드 과정에서 설명)
  //함수 자체를 변수에 저장 가능
  //함수의 인자에 다른 함수를 인수로 전달 가능
  //함수의 반환 값(return값)으로 함수를 전달 가능

console.log("안녕하세요");
function desc(callback) {
  setTimeout(() => {
    console.log("Seongmin Shin 입니다.");
    callback();
  }, 3000);
}
function desc2(){
  console.log("신성민입니다.")
}
desc(desc2);

//콜백지옥
function func1(callback){
  setTimeout(() => {
    console.log("1");
    setTimeout(()=>{
      console.log("2");
      setTimeout(() => {
        callback();
      }, 500);
    }, 500);
  }, 500);
}
function func2(){
  console.log("3");
}
func1(func2);

//2. Promise
//ES6에서 공식적으로 추가도니 문법으로, 비동기 처리를 위한 콜백함수의 단점을 극복하기 위해 제안됨
//1)new로 Promise객체 생성
//2)promise객체에서는 executor라는 함수가 자동으로 실행되고, executor라는 함수는 resolve와 reject라는 두개의 함수를 인자로 받아서 비동기 처리 함수를 실행
//3)excutor를 통해 비동기 처리 함수를 실행 완료 후, 해당 작업이 성공이면 resolve, 실패면 reject함수를 호출

//Promise 객체 생성
const runCode = new Promise(
  (resolve,reject) => {
    //비동기 작업 수행
    setTimeout(() => {
      let num = 10;
      if (num >11) {
        /*비동기 작업 성공*/
        resolve(num);
      } else {
        /*비동기 작업 실패*/
        reject("error");
      }
    }, 1000);
  }
);

//2-(1) Promise의 3가지 상태(states)
//위 코드에서 promise 변수 (즉, Promise 객체)는 다음과 같이 3가지 상태를 가질 수 있음
  //pending(대기): 비동기 처리가 아직 실행되지 않은(초기)상태
  //Fulfilled(이행): 비동기 처리가 성공적으로 완료된 상태
  //Rejected(실패): 비동기 처리가 실패한 상태

//2-(2) then 메서드
//위 코드에서 작업 성공 또는 실패 시, 수행할 작업을 정의하고, promise코드를 실행해주는 메서드
//두 콜백 함수를 인자로 받음 (successCallback, failureCallback)

//then 메서드에 하나의 함수만 선언할 경우, 이는 successCallback 동작만 선언한 
const runCode = new Promise(
  (resolve,reject) => {
    setTimeout(() => {
      let num = 10;
      if (num >5) {
        resolve(num);
      } else {
        reject("error");
      }
    }, 1000);
  }
);

runCode.then((item) => {
  console.log("success", item);
}, (err) => {
  console.log(err);
});

// by seongmin 제일 먼저 출력
const runCode = new Promise(
  (resolve,reject) => {
    //비동기 작업 수행
    setTimeout(() => {
      let num = 10;
      if (num >11) {
        /*비동기 작업 성공*/
        resolve(num);
      } else {
        /*비동기 작업 실패*/
        reject("error");
      }
    }, 1000);
  }
);
runCode.then((item) => {
  console.log("success", item);
}, (err) => {
  console.log(err);
});

console.log("by Seongmin"); // 제일 먼저 출력

// by seongmin 맨 나중에 출력
const runCode = new Promise(
  (resolve,reject) => {
    setTimeout(() => {
      let num = 10;
      if (num >11) {
        resolve(num);
      } else {
        reject("error");
      }
    }, 1000);
  }
);

runCode.then((item) => {
  console.log("success", item);
}, (err) => {
  console.log(err);
}).then(() => {
  console.log("by Seongmin"); //나중에 출력
}, () => {
  console.log("error2"); 
});

//2-(3) catch 메서드
//실행 중, 예외상황을 처리함
//failureCallback이 정의되어 있지 않을 경우, reject시에도 catch 메서드를 호출함

//Promise 객체 생성
const promise = new Promise(
  (resolve,reject) => {
    //비동기 작업 수행
    setTimeout(() => {
      let num = 10;
      if (num >=11) {
        resolve(num);
      } else {
        /*비동기 작업 실패 */
        reject("this is an error");
      }
    }, 1000);
});

promise.then((num) => {
  console.log("success", num);
}).catch((error) => {
  console.log(error);
});



//2-(4) chaining 
//2-(5) chaining과 catch
//2-(6) chaining과 return
//2-(7) finally
//2-(8) Promise.all
//2-(9) Promise.race

