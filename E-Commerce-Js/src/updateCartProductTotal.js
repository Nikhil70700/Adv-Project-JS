import {getCartProductFromLS} from "./getCartProducts";

export const updateCartProductTotal=()=>{


    let productSubTotal=document.querySelector(".productSubTotal");
    let productFinalTotal=document.querySelector(".productFinalTotal");

    let localCartProducts=getCartProductFromLS();

    let initialValue=0;

    let totalProductPrice=localCartProducts.reduce((accum,curElem)=>{

        let productPrice=parseInt(curElem.price) || 0;
        return  accum+productPrice;
    },initialValue);
    // console.log(totalProductPrice);

    productSubTotal.textContent=`₹${totalProductPrice+50}`;
    productFinalTotal.textContent=(`₹${totalProductPrice+50}`);
};