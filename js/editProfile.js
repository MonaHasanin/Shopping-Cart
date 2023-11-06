// Get Data form LocalStorage
let get_user = localStorage.getItem("username");
let get_email = localStorage.getItem("email");

// Variables

let userInput = document.getElementById("changeName");
let userEmailInput = document.getElementById("changeEmail");
let editForm = document.getElementById("updateForm");
let inputImage = document.getElementById("userImage");
// let inputImage;

 // Setting Values of Input
 userInput.value = get_user;
userEmailInput.value = get_email;
//userImage = inputImage.imageUrl;

// //Events
editForm.addEventListener("submit", editProfileData);
function editProfileData(e) {
    e.preventDefault();
    
    // Check if a new image is selected
    if (inputImage.files.length > 0) {
        let userImage = inputImage.files[0];
        console.log("Uploaded image name:", userImage.name);
    
        localStorage.setItem("userImage", userImage.name);
    
        // تحديث مصدر الصورة
        let userImageElement = document.getElementById("userImage");
        userImageElement.src = URL.createObjectURL(userImage);
    } 
    
    
    

    localStorage.setItem("username", userInput.value);
    localStorage.setItem("email", userEmailInput.value);
   // localStorage.setItem("userImage", inputImage);

    setTimeout(() => {
        window.location = "profile.html";
    }, 500);
} 
