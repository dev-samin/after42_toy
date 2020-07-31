/*console log
const date = new Date() (현재 시간 선언)
date (현재 요일 월 일 연도 시 분 초)
date.getDay() (1~7 월요일~일요일)
date.getDate() date.getHours() date.getMinutes() (일, 시, 분)
setInterval(fn, int) (parameter : 실행할 함수, 실행할 시간 간격(millisecond))
*/

//class 사용
const clockContainer = document.querySelector(".js-clock"),
//class 내 element 사용
    clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    //clockTitle 내 텍스트 설정
    clockTitle.innerText = `${
        hours < 10 ? `0${hours}` : `${hours}`
    }:${
        minutes < 10 ? `0${minutes}` : `${minutes}`
    }:${
        seconds < 10 ? `0${seconds}` : `${seconds}`
    }`;
}

function init() {
    //시간 초기화
    getTime();
    setInterval(getTime, 1000);
}

init();