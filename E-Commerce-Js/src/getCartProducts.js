import { updateCartValue } from "./updateCartValue";

export const getCartProductFromLS=()=>{

    let cartProducts=localStorage.getItem("cartProductLS");
    if(!cartProducts){
        return [];
    }
    cartProducts=JSON.parse(cartProducts);
    //Update the Cart button Value
    updateCartValue(cartProducts);
    return cartProducts;

    

};