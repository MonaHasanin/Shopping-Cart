let username = document.querySelector("#username");
let userDom = document.querySelector("#password");
let loginBtn = document.querySelector("#sign_in");

let getUser = localStorage.getItem("username");
let getPassword = localStorage.getItem("password");

loginBtn.addEventListener('click', login); 

function login(e){
    e.preventDefault();
    if (username.value === "" || password.value === ""){
        alert("Please Fill Data");
        document.getElementById("result").innerHTML="Please Enter username and password";
    } else {
if(
     getUser &&
     getUser.trim() === username.value.trim() && 
     getPassword &&
     getPassword === password.value
      ){
    setTimeout (() => {
        window.location = "./index.html";
    }, 1500);
} else {
    alert("wrong username or password!!");
    document.getElementById("result").innerHTML="Sorry, wrong username or password!!";

}
}
}