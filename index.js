// 제대로 연동됐는지 확인
// - 경고창 : alert("Hello");
// - 콘솔창 : console.log("Hello");

// 한 줄 주석(코멘트)
/* 여러 줄 주석 (코멘트) */

// const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
// console.log(daysOfWeek[2]);
// 0부터 세기 시작하기 때문에 Mon-0, Tue-1, Wed-2 ...

// 함수를 정의하는 문법

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  title.classList.toggle(CLICKED_CLASS);
}
// 해당 클래스가 거기 있는지 체크해서 거기 있으면 add, 없으면 remove 해준다.

function init() {
  title.addEventListener("click", handleClick);
}

init();
