// alert("도원암귀 포스터 특전 받기"); 위에 작은 창이 나오면서 글씨가 나옴
// console.log("15일부터 시작했어, 이미"); 아직 안 나옴



/*html => js 값 이동
버거메뉴 => navtoggleDiv
버거메뉴 i => navToggleI
.nav-list => navListUI
const navtoggleDiv = document.getElementById("nav_toggle");
console.log(navtoggleDiv);
console.log(nav_toggle);*/

const navToggleI = nav_toggle.getElementsByClassName("i")[0];
//console.log(navToggleI);

const navListUI = document.getElementsByClassName("nav-list")[0];
//console.log(navListUI)[0];

function say_hello(){   //js 함수 만드는 방법
    alert("15일부터 시작함");
}

nav_toggle.onclick = alert("뭐야"); //이렇게 하면 바로 실행함 제어 필요 ㅇㅇ
nav_toggle.onclick = say_hello;//먼저 시작 ) 이유:위에 함수가 먼저 작성되어 있기 때문에
/*
nav_toggle.onclick = function hello(){
    alert("신기");
}

nav_toggle.onclick = function(){
    alert("신기");  실행 가능함
}

nav_toggle.onclick = () => alert("신기"); 얘도 실행됨

nav_toggle.onclick = alert("신기"); 실행이 되나 onclick의 효과가 사라져서 안됨

nav_toggle.onclick = () => {
    alert("신기"); 얘도 실행됨
}

*/


/*2. Evnt Handling
버거메뉴를 클릭하면 버거메뉴 i <=> X(부트스트랩 -> "bi bi-x-lg")
버거메뉴 클릭하면 .nav-list에 .show-menu 보여주기 <=> 안보여주기



html => js
1. id
const navtoggleDiv = document.getElementById("nav_toggle");
nav_toggle; //js에서의 변수 규칙에는 -가 없고 _만 존재하기 때문에
html에서의 id를 규칙에 맞게 작성했다면 그대로 js에 적어도 실행이 된다.

2. class
const navToggleI = document.getElementsByClassName("nav-toggle")[0];

3. tag
const navtoggleDiv = document.getElementsByTagName("div")[0]; =>별로 추천을 안함 실제 페이지를 만들면
div의 개수가 많아지기 때문에 복잡하고 정확하지 않을 수 있음

const navtoggleDiv = document.querySelector("#nav_toggle");
const navtoggleDiv = document.querySelector(".nav-toggle")[0];
const navtoggleDiv = document.querySelector("div")[0];   =>써도 되지만 위 3개보단 느림(인터넷 접속만 느림)*/