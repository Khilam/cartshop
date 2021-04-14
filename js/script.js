let carts=document.querySelectorAll('.add-cart');
let products = [
    {
        name:'Guess',
        price:500,
        tag:'femme',
        inCart:0
    },
    {
        name:'Guess',
        price:450,
        tag:'homme',
        inCart:0
    },
    {
        name:'Festina',
        price:250,
        tag:'homme',
        inCart:0
    },
    {
        name:'Festina',
        price:500,
        tag:'femme',
        inCart:0
    },
    {
        name:'Montre Céramique Noire Diamants Femme',
        price:800,
        tag:'femme',
        inCart:0
    }
];
for (let i=0; i< carts.length; i++){
    carts[i].addEventListener('click', ()=>{
        cartNumbers();
    })
}
function onLoadCartNumbers(){
    let productNumbers=localStorage.getItem('cartNumbers');
    if (productNumbers){
        document.querySelector('.badge').textContent=productNumbers;

    }

}
  function cartNumbers(){
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

  }   
     
  onLoadCartNumbers();








//let removeCartItemButtons= document.getElementsByClassName('btn-remove')
//console.log(removeCartItemButtons)
//for (let i=0; i<removeCartItemButtons.length;i++){
   // let button=removeCartItemButtons[i]
  // button.addEventListener('click', function(event){
     
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
        //}