// Register User

let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

let registerBtn = document.querySelector("#sign_up");

registerBtn.addEventListener("click", register);

function register(e) {
  e.preventDefault();
  if (username.value === "" || email.value === "" || password.value === "" || cpassword.value=="") {
    alert("Please Fill Data");
    document.getElementById("result").innerHTML="Please Enter and Fill Data";
    return false;
  } 
  else if (cpassword.value !== password.value){
    alert("Password doesn't matched");
    document.getElementById("result").innerHTML="Password doesn't matched";
    return false;
}
else if ( password.value.length<6){
    alert("Password must be 6-digits");
    document.getElementById("result").innerHTML="Password must be 6-digits";
    return false;
} 
  else {
    localStorage.setItem("username", username.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);

    setTimeout(() => {
      window.location = "./login.html";
    }, 1500);
  }
}