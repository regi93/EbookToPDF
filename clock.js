// const clockContainer = document.querySelector(".js-clock");


// function setClock(){ 
//     var today = new Date();
//     var h = today.getHours();
//     var m = today.getMinutes();
//     var s = today.getSeconds();    
//     clockContainer.innerHTML=`${h}:${m}:${s}`
//     setTimeout(setClock, 500);    
// if (second < 10) {
//     second = "0" + second;
// }
// }



const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    var second = date.getSeconds();
    clockTitle.innerText = `${hours > 10 ? hours : `0${hours}`}:${
        minutes > 10 ? minutes : `0${minutes}`}:${
        second > 10 ? second : `0${ second }`}`;
}

function init() {
    getTime();
    setInterval(getTime, 500);
}
init();




//need two argument setInterval(fn , 1000) 1000 = 1초 간격으로 fn함수를 반복실행한다.  fn뒤에 ()안붙인다.