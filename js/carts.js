//let productsInCart = localStorage.getItem('productsInCart');
let productsDom = document.querySelector(".products");
let noProductsDom = document.querySelector(".noProducts");

/*
if (productsInCart) {
    let items = JSON.parse(productsInCart);
    drawCartProductsUI(items);
}
*/
function drawCartProductsUI(allProducts = []){

    if (JSON.parse(localStorage.getItem("productsInCart")).length === 0)
    noProductsDom.innerHTML = "There is no products yet!!";
   
    //السطر الجاي علشان يجيب الداتا من الداتا بيز الي حفظتها أو لو مبعتش داتا يجيب كل الداتا
    let products =
    JSON.parse(localStorage.getItem("productsInCart")) || allProducts;
    let productsUI = products.map((item) => {
        return `        
        <section class="home"> 
        <div >
            <div class="products">

                <div class="product-item">
                    <img src="${item.imageUrl}"
                     alt="image"
                     class="product-item-img" />

                    <div class="product-item-desc">
                        <h2>${item.title}</h2> <br>
                        <p>${item.desc}</p> <br>
                        <span> Size: ${item.size}</span> <br>
                        <span> Quantity: ${item.qty}</span> <br>
                    </div>

<div class="product-item-actions">
<button class="add-to-cart" 
 onclick="removeItemFromCart( ${item.id})"> 
    Remove From Cart</button>
</div>
         </div>
           `;
    });

    productsDom.innerHTML = productsUI.join("");
}
drawCartProductsUI();

function removeItemFromCart(id){
    //console.log(id);
  /*
  if (productsInCart) {
        let items = JSON.parse(productsInCart)
        let filteredItems = items.filter((item) => item.id !==id);
        drawCartProductsUI(filteredItems);
        localStorage.setItem("productsInCart", JSON.stringify(filteredItems));
    }
      */
       let productsInCart = localStorage.getItem('productsInCart');
       if (productsInCart) {
        let items = JSON.parse(productsInCart)
        let filteredItems = items.filter(item => item.id !== id)
        localStorage.setItem('productsInCart', JSON.stringify(filteredItems));
        //console.log(filteredItems);
        // السطر الجاي علشان تشيل المنتجات من صفحة الhtml نفسها للمستخدم
    drawCartProductsUI(filteredItems);   
    }
}
