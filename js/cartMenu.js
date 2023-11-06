let cartProductsDivDom= document.querySelector('.carts-products div');
let cartProductsMenu= document.querySelector('.carts-products');
let badgeDom= document.querySelector('.badge');
let shoppingCartIcon = document.querySelector('.shoppingCart');

//check if there is items in local storage
let addedItem =localStorage.getItem('productsInCart') 
? JSON.parse(localStorage.getItem('productsInCart')) 
: [];

if (addedItem) {
  addedItem.map((item) => {
   cartProductsDivDom.innerHTML += `<p> ${item.title} ${item.qty}</p>`;
       });
       badgeDom.style.display = "block";
       badgeDom.innerHTML += addedItem.length;
    }


    // open cart menu
function openCartMenu() {
    if (cartProductsDivDom.innerHTML != ""){
        if (cartProductsMenu.style.display == "block") {
            cartProductsMenu.style.display ="none";            
        } else {
            cartProductsMenu.style.display ="block";
        }
    }

}