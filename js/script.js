// Define Product
let productsDom = document.querySelector(".products");
let products = productsDB;


//open cart menu
shoppingCartIcon.addEventListener('click', openCartMenu);

//display products
let drawCartProductsUI;
(drawCartProductsUI = function(products = []){
    let productsUI = products.map((item) => {
       // console.log("eee", item);
        return `        
                <div class="product-item" style="border: ${
                    item.isMe === "Y" ? "2px solid darkred" : ""
                }">
                    <img 
                    src="${item.imageUrl}"
                     alt="image"
                     class="product-item-img" />

                    <div class="product-item-desc">
                        <a onclick='saveItemData(${item.id})'>${item.title}</a>
                        <p>${item.desc}</p> <br>
                        <span>${item.size}</span>

                        ${
                            item.isMe === "Y" &&
                            "<button class='edit-product' onclick='editProduct(" + 
                            item.id +
                             ")'> Edit Product </button>"
                          }
                          
                          </div>

                    <div class="product-item-actions">
                        <button class="add-to-cart" 
                         onclick="addedToCart( ${item.id})"> 
                            Add To Cart</button>

                            
                             <i id="favorite" class="fa fa-heart" 
                             style="color: ${
                                        item.liked == true ? "red" : ""
                                       }"
                                         onclick="addToFavorite(${item.id})">
                                        </i>
                                        
            </div>
        </div>
           `;
    });

    productsDom.innerHTML = productsUI.join("");
})(JSON.parse(localStorage.getItem("products")) || products);
 
    //Add To Cart
  //  let allItems = []
function addedToCart(id){
       if (localStorage.getItem("username")) {
           // console.log("added To Cart");
           // console.log(id);
        let products = JSON.parse(localStorage.getItem('products')) || products;
        let product = products.find( (item) => item.id === id);
           //console.log(product);
        
        let isProductInCart = addedItem.some((i) => i.id === product.id);
         //console.log("items", items);

         if (isProductInCart){
            //product.qty += 1;
            addedItem = addedItem.map(p => {
            if (p.id === product.id) p.qty +=1;
             return p;
         });
         } else {
            addedItem.push(product);
          //console.log("a", allItems);
         }

         cartProductsDivDom.innerHTML = "";
         addedItem.forEach((item) => {
            cartProductsDivDom.innerHTML += `<p> ${item.title} <span class='item-qty'>${item.qty}</span></p>`;
         });
         //  cartProductsDivDom.innerHTML += `<p> ${product.title}</p>`;
           


           // addedItem = [...addedItem, choosenItem];
    //JSON.parse() //string to object
    //JSON.stringify() //obj to string
    
   // let uniqueProducts = getuniqeArr(addedItem, "id");
   //Save Data 
   localStorage.setItem('productsInCart', JSON.stringify(addedItem));

          // console.log(badgeDom);
// Add counter of items in View all products list
          let cartProductItem = document.querySelectorAll('.carts-products div p');
 // console.log(cartProductItem);  
  badgeDom.style.display ="block";
    badgeDom.innerHTML = cartProductItem.length;
         // window.location = "cartProducts.html"
         } else {
        window.location = "login.html";
            }
}

function getuniqeArr(arr , filterType) {
    let unique = arr
    .map((item) => item[filterType])
    .map((item, i, final) => final.indexOf(item) === i && i)
    .filter((item) => arr[item])
    .map((item) => arr[item]);
    return unique;
    console.log(unique);
}
 
function saveItemData(id) {
    localStorage.setItem("productId", id);
    window.location= "cartDetail.html";
}


//Search function

let input = document.getElementById('search')
input.addEventListener("keyup", function(e){
  //  if(e.keyCode === 13) { //علشان لما نضغط انتر يعمل الفنكشن دي
        //console.log("Enter");
        search(e.target.value, JSON.parse(localStorage.getItem("products")));
  //  }
    if(e.target.value.trim() === "")
    drawCartProductsUI(JSON.parse(localStorage.getItem("products")));
});
function search(title, myArray) {
  /*
    //علشان أعمل لووب على الراي وأدور على الاسم الي عاوزه فيها:
    for(var i = 0; i< myArray.length; i++){
        if (myArray[i].title === title) {
            console.log(myArray[i]);
        }
    }
    */
   // بدل كل الي فوق ده ممكن نعبر عنها بالتالي
   // let arr = myArray.filter((item) => item.title === title);
    let arr = myArray.filter(
        (item) => item.title.toLowerCase().indexOf(title.toLowerCase()) !== -1
        );
    // console.log(arr);
    drawCartProductsUI(arr);
}
//search("headphone item", JSON.parse(localStorage.getItem("products")));



    //Add To Favorite
    let favoriteItems = localStorage.getItem('productsfavorite') 
    ? JSON.parse(localStorage.getItem('productsfavorite')) 
    : [];

function addToFavorite(id){
       if (localStorage.getItem("username")) {
        let product  = products.find((item) => item.id === id);
        
        product.liked = true;

        favoriteItems = [...favoriteItems, product];
       
        let uniqueProducts = getuniqeArr(favoriteItems, "id");
        localStorage.setItem('productsfavorite', JSON.stringify(uniqueProducts));
         
        products.map((item) => {
        if(item.id === product.id){
        item.liked = true;
    }
                               });
    localStorage.setItem('products', JSON.stringify(products));
    drawCartProductsUI(products);

    } else {
        window.location = "login.html";
            }
                            }




// filter products By Size
let sizeFilter = document.getElementById("size-filter");
//let filteredProductList=[];
                
sizeFilter.addEventListener("change", getProductsFilteredBySize)
function getProductsFilteredBySize(e) {
    //console.log(e.target.value);
    let selectedValue= e.target.value;

    let products = JSON.parse(
        localStorage.getItem("products")
    ) || products;


    if (selectedValue === "all") {
        drawCartProductsUI(products)
    } else {
        products = products.filter(i => i.size === selectedValue)
        drawCartProductsUI(products)
    }
}

//Edit product
function editProduct(id) {
//    console.log("id", id);
localStorage.setItem("editProduct", id);

window.location = "./editProduct.html"
}