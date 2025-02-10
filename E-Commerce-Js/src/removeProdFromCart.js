import { getCartProductFromLS } from "./getCartProducts"
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

export const removeProdFromCart=(id)=>{
    let cartProducts=getCartProductFromLS();cartProducts=cartProducts.filter((curProd)=>curProd.id!=id);
    

    //update cart in local storage after removing the iteem
    localStorage.setItem("cartProductLS",JSON.stringify(cartProducts));

    //TO remove the Div onClick
    let removeDiv=document.getElementById(`card${id}`);
    if(removeDiv){
        removeDiv.remove();

        //Show toast when product  added to the cart
        showToast("delete",id)
    }
updateCartValue=(cartProducts);
    
}