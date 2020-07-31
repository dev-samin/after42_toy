/*local storage (작은 저보들을 저장)
localstorage.setItem(key, value)
-> key, value를 local storage에 저장
localstorage.getItem(key)
-> local storage에 key가 저장되어 있으면 value값을 얻을 수 있음
*/

const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

//local storage에 저장
function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

//form에 추가 시 발생하는 이벤트
function handelSubmit(event) {
    //Default로 실행되는 event 막기
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

//currentUser가 null일때 실행
function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handelSubmit);
}

//currentUser가 null이 아닐때 실행
function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

//currentUser 불러오기
function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();