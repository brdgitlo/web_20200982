var arr = ['a', 'b', 'c'];
var arr2 = [1, 'b', 3.5151231231];
//arr = ['a', 'b', 'c', 'e'];
arr[arr.length] = 'e';
//배열의 끝에 요소를 추가
arr = ['a', 'b', 'c'];
arr.length = arr.length - 1;
//배열의 크기 1개 x
arr[5] = 'g';//index 5에 요소를 추가
arr.pop(); //값 삭제(뒤)
arr2.push("pushed"); //값 추가(뒤)
arr.shift(); //값 삭제(앞)
arr2.unshift("pushed2"); // 값 추가(앞)

console.log(arr); //배열 출력
console.log(typeof arr2[0]);
console.log(typeof arr2[0]);