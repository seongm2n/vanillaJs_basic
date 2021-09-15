// JS 반복문과 배열

// JS 반복문
// 1. for문
for (let i =0; i < 5; i++){
  console.log(i);
}
console.log('end');

// 배열과 for문

//length사용 : 배열의 길이만큼 반복
const data = ['Seongmin', 27, true];
for(let i = 0; i < data.length; i++){ 
  console.log(data[i]);
}

//for...of문 
const data = ['Seongmin', 27, true];
for(let item of data) {
  console.log(item);
}

// 참고 ( Object.entries(), Object.keys(), Object.values()사용해, 파이썬 사전을 반복문에 키와 값을 기반으로 사용하는 형태와 유사한 기능을 사용할 수 있음)
const data = {
  name : "Seongmin",
  age : 27,
  brand : "shin-coding",
  get_message : function(){
    return "Hello! You can do it!"
  }
} 
console.log(Object.entries(data)); //프로퍼티 키와 값으로 이루어진 각 프로퍼티 셋의 리스트, 즉[[키,값],[키,값],[키,값]]등으로 이우어진 배열 반환
console.log(Object.keys(data)); // 프로퍼티 키 리스트, 즉 [키,키,키]등으로 이루어진 배열 반환
console.log(Object.values(data)); //프로퍼티 값 리스트, 즉[값,값,값]등으로 이루어진 배열 반환

//for...in문
const data = {
  name : "Seongmin",
  age : 27,
  brand : "shin-coding",
  get_message : function(){
    return "Hello! You can do it!"
  }
} 
for (let property in data){              //property대신 key를 써도 
  console.log(property, data[property]); //객체의 프로퍼티(키)를 반복할 때마다 반환
}


//while
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

//continue와 break 문
//continue 문
//현재 반복 횟수에서, continue 다음의 반복 코드를 수행하지 않고, 다음 반복 횟수로 
for (let i = 0; i < 5; i++){
  if (i === 3){
    continue; // i가 3이되면 넘긴다.
  }
  console.log(i);
}

//break 문
//반복문 안에서, 더이상 반복문을 수행하지 않고, 반복문 밖으로 빠져나오기(반복문 종료)
for (let i = 0; i < 5; i++){
  if (i === 3){
    break; // i가 3이되면 반복문을 나가게되고, 3은 실행이 안된다.
  }
  console.log(i);
}

//JS 배열문

//JS배열 CRUD
//js배열 생성(CRUD의 Create)
//[]괄호를 사용하고 내부에서 아이템을 콤마(,)로 구분해서 넣으면 됨
//객체와 마찬가지로, 새로운 배열로 배열 변수의 배열을 덮어씌우는 경우는 많지 않으므로, 배열 변수 선언시 const를 많이 사용
const data = [1, 2, 3, "Seongmin", true];
console.log(data);
//배열 길이는 length로 확인 가능
console.log(data.length);

//객체처럼 생성도 가능
const data = new Array();
            //빈 배열을 객체처럼 선언 후, 다음과 같이 직접 데이터를 넣어줄 수 있음
data[0] = 1;
data[1] = 2;
console.log(data);

            //특정번호로 배열을 한다면 결과값은 [undefined, 1 , 2]
const data = new Array();
data[1] = 1;
data[2] = 2;
console.log(data); 

//js 배열 읽기(CRUD의 Read)
//0번 부터 시작하는 인덱스 번호로 각 아이템을 읽을 수 있음
const data = new Array(1, 2, 3, "Seongmin", true);
console.log(data[0]); //첫번째 아이템
console.log(data[1]);//두번째 아이템
console.log(data[data.length - 1]); // 마지막 아이템
                          
const data = new Array();  //빈 배열을 선언 후, 배열 읽기
data[0] = 1;
data[1] = 2;
console.log(data[0], data[1], data[data.length - 1]); 

//js배열 수정(CRUD의 Update)
//인덱스 번호로 각 아이템을 수정할 수 있음
const data = [1, 2, 3, "Seongmin", true];  
console.log(data);
data[1] = "Shin-coding";
console.log(data);

const data = new Array();  //빈 배열을 선언 후, 배열 수정
data[0] = 1;
data[1] = 2;
console.log(data);
data[1] = "Shin-coding";
console.log(data);

//js배열 삭제(CRUD의 Delete)
//배열변수.splice(삭제를 시작할 인덱스 번호,삭제를 시작할 인덱스 번호부터 몇 개를 삭제할 지의 갯수)
const data = [1,2,3,"Seongmin","Shin-coding"];
console.log(data);
data.splice(1, 3) //1번 부터 3개를 삭제
console.log(data);

//특별한 형태의 js배열
//js배열도 다양한 형태의 배열이 가능함 
const data = [1,2,3,"Seongmin", null]; //다양한 데이터 타입을 아이템으로 가질 수 있음
const data2 = [       // {}괄호는 객체 리터럴을 통한 객체로 인지하며, 객체도 아이템으로 선언 가능
  {name: "Seongmin", age: 27},
  {name: "Sara", age: 29}
];

//참고 -> 배열 안에 배열도 가능
const data3 = [
  [1,2,3],
  [4,5,6]
];

//여러 라인으로 선언 가능
const data4 = [
  "Seongmin",
  "Shin-coding",
  1
];

//개별 아이템이 객체일 경우, 인덱스 번호로 객체의 프로퍼티도 접근 가능
console.log(data[0]);
console.log(data2[0].name);

//배열 안에 배열
console.log(data3[0][2]); 
