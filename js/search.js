document.getElementById("search_btn").addEventListener('click', search_message);

function search_message(){
   alert("검색을 수행합니다!");
	let search_str= document.querySelector("#search_txt"); //변수의 저장
	document.getElementById("search message").innerHTML = search_str.value;//태그에 값 추가
	console.log(search_str.value); //콘솔에 출력
}