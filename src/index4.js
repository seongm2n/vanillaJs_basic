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

