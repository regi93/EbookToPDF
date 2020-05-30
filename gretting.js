const form = document.querySelector(".js-form"),
    input = document.querySelector("input")
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_ON = "showing";
function saveName(text) {
    localStorage.setItem(USER_LS, text);
}
function handleSubmit() {
    event.preventDefault();
    // 기본동작 - 엔터치면 적어놨던거 날아가는걸 방지(날아가는게 디폴트메소드)
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
    }

function askForName() {
    form.classList.add(SHOWING_ON);
    form.addEventListener("submit", handleSubmit);
}


function paintGreeting(text) {
    form.classList.remove(SHOWING_ON);
    greeting.classList.add(SHOWING_ON);
    greeting.innerText = `Hello ${text}`;

}


function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        // 유저가 없을때
        askForName();
    }
    else {
        // 유저가 있을때
        paintGreeting(currentUser);
    }
}
function init() {
    loadName();
}
init();



// 로컬 스토리지 (아마 브라우져내의 (클라이언트단) 저장공간인듯)에 username을 저장
