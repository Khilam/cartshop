
let removeCartItemButtons= document.getElementsByClassName('btn-remove')
console.log(removeCartItemButtons)
for (let i=0; i<removeCartItemButtons.length;i++){
    let button=removeCartItemButtons[i]
   button.addEventListener('click', function(event){
     
       let buttonClicked= event.target
buttonClicked.parentElement.parentElement.remove()
updateCartTotal()
      })
      }




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