// Variables
let products = JSON.parse(localStorage.getItem('products')) || productsDB;
let productId = JSON.parse(localStorage.getItem('editProduct'));
let getProduct = products.find(i => i.id === productId);

let productName = document.getElementById("name");
let productDesc = document.getElementById("discription");
let productSizeSelect = document.getElementById("size");
let updateForm = document.getElementById("updateForm");
let inputFile = document.getElementById("upload_image");
let productSizeValue;
let productImage;

productName.value = getProduct.title;
productDesc.value = getProduct.desc;
productSizeSelect.value = getProduct.size;
productImage = getProduct.imageUrl;

// //Events
productSizeSelect.addEventListener("change", getProductSizeValue);
updateForm.addEventListener("submit", updateProductFun);
inputFile.addEventListener("change",uploadImage);

// //functions
function getProductSizeValue(e) {
  productSizeValue = e.target.value;
 }

function updateProductFun(e) {
    e.preventDefault();

    getProduct.title = productName.value;
    getProduct.desc = productDesc.value;
    getProduct.size = productSizeValue;
    getProduct.imageUrl = productImage;
   
    localStorage.setItem("products", JSON.stringify(products));

    setTimeout(() => {
        window.location = "./index.html"
    }, 500)
}
//upload_image
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

    getImageBase64(file);
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
