let products = JSON.parse(localStorage.getItem("products"));
let productId = localStorage.getItem("productId");
let itemDom = document.querySelector(".item-details");

let productDetails = products.find((item) => item.id == productId);
console.log(productDetails);

itemDom.innerHTML = `
<img src="${productDetails.imageUrl}" alt="image"/>
<br><br>
<br>

<h2> ${productDetails.title} </h2>
<br><br>

<p>${productDetails.desc}</p>
<span> Size : ${productDetails.size}</span>
<br>
<span> Quantity : ${productDetails.qty}</span>
<br>
<button onclick="editProduct(productId)"> Edit Product </button>
<br>
`;

//Edit product
function editProduct(id) {
    //    console.log("id", id);
    localStorage.setItem("editProduct", id);
    
    window.location = "./editProduct.html"
    }