const cartValue=document.querySelector('#cartValue');


export const updateCartValue=(cartProducts)=>{

    console.log(typeof cartProducts);
 
    if(typeof cartProducts == "number")
    {
        return cartValue.innerHTML=`<i class="fa-solid fa-cart-shopping"></i>${cartProducts}</a></li>`
    }
    return cartValue.innerHTML=`<i class="fa-solid fa-cart-shopping"></i>${cartProducts.length}</a></li>`

}