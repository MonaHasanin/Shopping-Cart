let productsDom = document.querySelector(".products");
let noProductsDom = document.querySelector(".noProducts");

function drawFavoriteProductsUI(allProducts = []){

    if (JSON.parse(localStorage.getItem("productsfavorite")).length === 0)
    noProductsDom.innerHTML = "There is no Favorites!!";
   
    let products =
    JSON.parse(localStorage.getItem("productsfavorite")) || allProducts;
    let productsUI = products.map((item) => {
        return `        
        <section class="home"> 
        <div class="container">
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
 onclick="removeItemFromFavorite( ${item.id})"> 
    Remove From Favorites</button>
</div>
         </div>
           `;
    });

    productsDom.innerHTML = productsUI.join("");
}
drawFavoriteProductsUI();

function removeItemFromFavorite(id){
  
       let productsfavorite = localStorage.getItem('productsfavorite');
       if (productsfavorite) {
        let items = JSON.parse(productsfavorite);
        let filteredItems = items.filter(item => item.id !== id);
        localStorage.setItem('productsfavorite', JSON.stringify(filteredItems));

        drawFavoriteProductsUI(filteredItems);   
    }
}


 