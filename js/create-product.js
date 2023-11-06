// Variables
let productName = document.getElementById("name");
let productDesc = document.getElementById("discription");
let productSizeSelect = document.getElementById("size");
let createForm = document.getElementById("createForm");
let inputFile = document.getElementById("upload_image");
//let createProduct = document.getElementById("createProduct");
let productSizeValue;
let productImage;


//Events
productSizeSelect.addEventListener("change", getProductSizeValue);
createForm.addEventListener("submit", createProductFun);
inputFile.addEventListener("change",uploadImage);

//functions
function getProductSizeValue(e) {
//    console.log(e.target.value);
    productSizeValue = e.target.value;
}

function createProductFun(e) {
    e.preventDefault();
    let allProducts = JSON.parse(localStorage.getItem('products')) || productsDB;
    let nameValue = productName.value;
    let descValue = productDesc.value;
   //let descValue = "Lorem ipsum dolor sit amet consectetur.";


   if (nameValue && descValue) {
    let obj = {
        id: allProducts ? allProducts.length + 1 : 1,
        qty: 1,
        imageUrl: productImage,  
        size: productSizeValue,
        title: nameValue,
        desc: descValue,
        isMe: "Y",
    };

    let newProducts  = allProducts ? [...allProducts, obj] : [obj];
    localStorage.setItem("products", JSON.stringify(newProducts));

    productName.value = "";
    productDesc.value = "";
    productSizeSelect.value = "";

    setTimeout(() => {
        window.location = "./index.html"
    }, 500);
}
else {
    alert("Please fill the form correctly!");
} ;
}
   
//upload_image
//let preview;
function uploadImage() {
    let file = this.files[0];
   // console.log(file);
   
    let types = ["image/jpeg" , "image/png"]
    if(types.indexOf(file.type) == -1){
//    if(!file.type === "image/jpeg" || !file.type === "image/png"){
        alert("Allowed only files jpg and png");
        return;
    }
    if (file.size > 2 * 1024 * 1024) {
        alert("Image not exced 2MG");
        return;        
    }


    //productImage = URL.createObjectURL(file);
    getImageBase64(file);

    //console.log("o". preview);
}


function getImageBase64(file){
    let reader = new FileReader()

    reader.readAsDataURL(file);

    reader.onload = function(){
        //console.log(reader.result);
        productImage = reader.result;
};
    reader.onerror = function () {
        alert("Error !!");        
    };

}