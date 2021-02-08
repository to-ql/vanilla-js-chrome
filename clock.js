const clockContainer = document.querySelector(".js-clock"),
  // querySelector는 element의 자식을 탐색
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
  // 여기서 ?는 if, : 는 else와 같은 역할
}
function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
