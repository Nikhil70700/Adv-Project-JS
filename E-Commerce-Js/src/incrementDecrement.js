import { getCartProductFromLS } from "./getCartProducts";

export const incrementDecrement=(event,id,stock,price)=>{
    const currentCardElement=document.querySelector(`#card${id}`);
    const productQuantity=currentCardElement.querySelector(".productQuantity");
    const productPrice=currentCardElement.querySelector('.productPrice');


    let quantity=1;
    let localStoragePrice=0;

    //------------------------------------
    //Get the data from Local Storage
    //------------------------------------
   let localCartProducts=getCartProductFromLS();
   let existingProd=localCartProducts.find((curProd)=>curProd.id===id);

   if(existingProd){
    quantity=existingProd.quantity;
    localStoragePrice=existingProd.price;
   }else{
    localStoragePrice=price;
    price=price;
   };

   if(event.target.className==="cartIncrement"){
    if(quantity<stock){
        quantity+=1;

    }else if(quantity===stock){
        quantity=stock;
        alert("Limited Quantity");
        localStoragePrice=price*stock;
    }
   }
   if(event.target.className==="cartDecrement"){
    if(quantity>1){
        quantity-=1;
    }
   }

   //Updating the price in local Storage

   localStoragePrice=price*quantity;
   localStoragePrice=Number(localStoragePrice.toFixed(2));

   let updatedCart={id,quantity,price:localStoragePrice};
   updatedCart=localCartProducts.map((curProd)=>{
    return curProd.id === id ? updatedCart : curProd;
   });
//    console.log(updatedCart);
   localStorage.setItem("cartProductLS",JSON.stringify(updatedCart));

   //Reflect the changes on the screen by clicking on increment decrement button of cart

   productQuantity.innerText=quantity;
   productPrice.innerText=localStoragePrice;
};