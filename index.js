const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")
const HIDDEN_CLASSNAME = "hidden" // string만 포함된 정보는 대문자로 변수이름을 설정
const USERNAME_KEY = "username";

// input value validity check
function onLoginSubmit(event) {
    event.preventDefault(); // submit을 하면 새로고침이 되는데 이를 막아준다.
    loginForm.classList.add(HIDDEN_CLASSNAME)
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    // greeting.innerText = "Hello " + username;  // String을 합치는 방법1
    // greeting.innerText = `Hello ${username}`;  // String을 합치는 방법2
    // greeting.classList.remove(HIDDEN_CLASSNAME)
    paintGreeting(username)
}

loginForm.addEventListener("submit", onLoginSubmit) // submit, click등 이벤트에 따라 알려주는 정보가 다르다.

function paintGreeting(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove("hidden");
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreeting(savedUsername)
}

