const loginForm = document.querySelector("#login-form"); 
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USENAME_KEY = "username";

function onLoginSubmit(event){
    // 새로고침을 막아주는 코드 라인9
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const typedUserName = loginInput.value;
    localStorage.setItem("USENAME_KEY", typedUserName);
    paintGreetings();
}
 
function paintGreetings(){
    const username = localStorage.getItem("USENAME_KEY"); 
    greeting.innerText = `Hello ${username}`
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem("USENAME_KEY");

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else{
    paintGreetings();
}
