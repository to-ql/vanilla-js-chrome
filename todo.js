const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  // toDos를 가져와서 로컬에 저장하는 일을 함
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
  // JSON.stringofy는 자바스크립트 object를 string으로 바꿔준다
}

function paintToDo(text) {
  const li = document.createElement("li"); // 비어있는 li 생성
  const delBtn = document.createElement("button"); // 버튼 생성
  const span = document.createElement("span"); // span 생성
  const newId = toDos.length + 1;
  delBtn.innerText = "✔️";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  li.appendChild(delBtn); // 뭔가를 그의 부모 엘리먼트 안에 넣는다 : 버튼을 li 안에 넣는다
  li.appendChild(span); // span을 li 안에 넣는다
  li.id = newId;
  toDoList.appendChild(li); // li를 ul 안에 넣는다

  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDos(); // push 한 이후에 호출해야함. 만약 push 전에 호출하면 saveToDos를 불러도 저장할 게 아무것도 없음
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    // console.log(loadedToDos); // string 형식인 것이
    // JSON = JavaScript Object Notation, 데이터를 전달할 때, 자바스크립트가 그걸 다룰 수 있도록 object로 바꿔주는 기능
    const parsedToDos = JSON.parse(loadedToDos);
    // console.log(parsedToDos); array 형식으로 바뀐 것을 볼 수 있다
    parsedToDos.forEach(function (toDo) {
      // forEach는 array를 위한 function임
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}
init();
