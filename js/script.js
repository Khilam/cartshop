let carts=document.querySelectorAll('.add-cart');


let products = [
    {
        name:'Guess femme',
        price:550,
        tag:'/home/mouna/Bureau/Evaluation1/js/images copy/im1.jpg',
        inCart:false
    },
    {
        name:'Guess homme',
        price:450,
        tag:'/home/mouna/Bureau/Evaluation1/js/images copy/im1.jpg',
        inCart:false
    },
    {
        name:'Guess homme',
        price:900,
        tag:'/home/mouna/Bureau/Evaluation1/js/images copy/im1.jpg',
        inCart:false
    },
    {
        name:'Guess homme',
        price:750,
        tag:'/home/mouna/Bureau/Evaluation1/js/images copy/im1.jpg',
        inCart:false
    },
    {
        name:'Guess femme',
        price:800,
        tag:'/home/mouna/Bureau/Evaluation1/js/images copy/im1.jpg',
        inCart:false
    },
    {
        name:'Festina femme',
        price:350,
        tag:'/home/mouna/Bureau/Evaluation1/js/images copy/im1.jpg',
        inCart:false
    },
    {
        name:'Eterna homme',
        price:500,
        tag:'/home/mouna/Bureau/Evaluation1/js/images copy/im1.jpg',
        inCart:false
    },
    {
        name:'Eternafemme',
        price:700,
        tag:'/home/mouna/Bureau/Evaluation1/js/images copy/im1.jpg',
        inCart:false
    },
    {
        name:'Dior femme',
        price:500,
        tag:'/home/mouna/Bureau/Evaluation1/js/images copy/im1.jpg',
        inCart:false
    },
    {
        name:'Dior femme',
        price:650,
        tag:'/home/mouna/Bureau/Evaluation1/js/images copy/im1.jpg',
        inCart:false
    }
];

let incrementBtn = document.querySelector('.incQ')
let decrementBtn = document.querySelector('.decQ')
let incQty = document.querySelectorAll('.incQ')
let decQty = document.querySelectorAll('.decQ')
for (let i=0; i< carts.length; i++){
    carts[i].addEventListener('click', ()=>{
        cartNumbers(products[i]);
        totalCost(products[i]);
        incrementValue(products[i])
    })
}
function onLoadCartNumbers(){
    let productNumbers=localStorage.getItem('cartNumbers');
    if (productNumbers){
    let productNumbers=localStorage.getItem('cartNumbers');
    document.querySelector('.badge').textContent=productNumbers;

    }
  

}

  function cartNumbers(product){
      
      let productNumbers=localStorage.getItem('cartNumbers');
      console.log(productNumbers)
      productNumbers=parseInt(productNumbers)
   

      if (productNumbers){
        localStorage.setItem('cartNumbers',productNumbers +1);  
        document.querySelector('.badge').textContent=productNumbers +1 
      }else{
        localStorage.setItem('cartNumbers',1);
        document.querySelector('.badge').textContent=1
      }
      
setItems(product);

  }   function setItems(product){
      let cartItems=localStorage.getItem('productsInCart')
      cartItems = JSON.parse(cartItems)
      console.log('my cart items are', cartItems)
      if (cartItems != null){
          if ( cartItems[product.tag] == undefined){
              cartItems={
                  ...cartItems,
                  [product.tag] : product
              }
          }
          cartItems[product.tag].inCart +=1;
      }else{
      product.inCart=1;
     cartItems={
          [product.tag]:product
        }
    }
      
      localStorage.setItem('productsInCart', JSON.stringify(cartItems));
  }
  
  function totalCost(product){
    // console.log('the product price is', product.price)
let cartCost = localStorage.getItem('totalCost');

console.log('the cartCost is', cartCost);
console.log(typeof cartCost)
if (cartCost != null){
    cartCost=parseInt(cartCost)
    localStorage.setItem("totalCost",cartCost + product.price);
}else{

localStorage.setItem("totalCost", product.price);

  }
}
function dispalyCart(){
    let cartItems= localStorage.getItem("productsInCart")
    cartItems =JSON.parse(cartItems)
let productContainer = document.querySelector(".products")
let cartCost = localStorage.getItem('totalCost');
console.log(cartItems)
    if (cartItems && productContainer){
      productContainer.innerHTML='';
      Object.values(cartItems).map(item=>{
          productContainer.innerHTML+= ` 
          <div class="product">
          <i class="fas fa-times-circle"></i>
          
              <img src="./js/images copy/${item.tag}.jpg">
              <span>${item.name}</span>
          </div>
          <div class="price">€${item.price}
          </div>
          <div class="quantity">
          <i class="fas fa-arrow-circle-up incQ"></i></button>
          <span>${item.inCart}</span>
          <i class="fas fa-arrow-circle-down decQ"></i>
          </div>
          <div calss="total">
          €${item.inCart * item.price}
         
          </div>
         
          `
         
      })
      productContainer.innerHTML +=  ` 
      <div class="bascketTotalContainer">
      <h4 class="bascketTotalTitle">
      Total
      </h4>
      <h4 calss="bascketTotal">
      €${cartCost}
      </h4>
      </div>
      `
}
}


//----------

function incrementValue()
{
    let value = parseInt(document.getElementsByClassName('quantity').value, 10);
    value = isNaN(value) ? 0 : value;
    if(value<10){
        value++;
            
            document.getElementsByClassName("quantity")[0].innerHTML = `${item.inCart}`;
    }
}

//----------
  onLoadCartNumbers();
  dispalyCart()

 



//let removeCartItemsButtons= document.getElementsByClassName('fas fa-times-circle')
//console.log(removeCartItemsButtons)
//for (let i=0; i<removeCartItemsButtons.length;i++){
   //let button=removeCartItemsButtons[i]
  //button.addEventListener('click', function(event){
     //console.log(clicked)
     //  let buttonClicked= event.target
//buttonClicked.parentElement.parentElement.remove()
//updateCartTotal()
      //})
      //}




      //function updateCartTotal(){
        //let cartItemContainer=document.getElementsByClassName('cart-items')[0]
        //let cartRows= cartItemContainer.getElementsByClassName('cart-row')
        //for(let i=0; i<cartRows.length;i++){
        //let cartRow= cartRows[i]
        //let priceElement=cartRow.getElementsByClassName('cart-price')[0]
        //let quantityElement=cartRow.getElementsByClassName('cart-quantity-input')[0]
        //console.log(priceElement,quantityElement)
        //let price = priceElement.innerText
        //console.log(cart-price)
          // }
        //}*/