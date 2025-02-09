import products from "../api/products.json";
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";

import {getCartProductFromLS} from "./getCartProducts";
import { incrementDecrement } from "./incrementDecrement";
import { removeProdFromCart } from "./removeProdFromCart";

let cartProducts=getCartProductFromLS();



let filterProducts=products.filter((curProd)=>{
   return cartProducts.some((curElem)=>curElem.id===curProd.id);
    // console.log(curProd.id)
});
console.log(filterProducts);

//To Update Add to Cart Page

const cartElement=document.querySelector("#productCartContainer");
const templateContainer=document.querySelector("#productCartTemplate");


const showCartProduct=()=>{
    filterProducts.forEach((curProd)=>{
        const{category,id,image,name,stock,price}=curProd;
        let productClone = document.importNode(templateContainer.content, true);


        const lSActualData=fetchQuantityFromCartLS(id,price);

        productClone.querySelector("#cardValue").setAttribute("id",`card${id}`);
        productClone.querySelector('.category').textContent=category;
        productClone.querySelector('.productImage').src=image;
        productClone.querySelector('.productName').textContent=name;
        productClone.querySelector(".productQuantity").textContent=lSActualData.quantity;
        productClone.querySelector('.productPrice').textContent=lSActualData.price;  


        //Add to cart + - button functionality

        productClone.querySelector(".stockElement").addEventListener("click",(event)=>{
            incrementDecrement(event,id,stock,price);
        })


        //Remove to cart Button...
        productClone.querySelector(".remove-to-cart-button").addEventListener('click',()=>removeProdFromCart(id))
        //End


        
        
    
        cartElement.appendChild(productClone);
    });
};

//Showing the Cart Product
showCartProduct();

