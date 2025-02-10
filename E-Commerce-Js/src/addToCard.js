import { getCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";



getCartProductFromLS();
export const addToCart = (event, id, stock) => {


    let arrLocalStorageProduct = getCartProductFromLS();


    const currentProductElem = document.querySelector(`#card${id}`);
    let quantity = currentProductElem.querySelector('.productQuantity').innerText;
    let price = currentProductElem.querySelector('.productPrice').innerText;

    // console.log(quantity,price);

    price = price.replace("₹", "");


    let existingProd = arrLocalStorageProduct.find((curProd) => {
        return curProd.id === id;

    });

    if (existingProd && quantity > 1) {
        quantity = Number(existingProd.quantity) + Number(quantity);
        // alert("Item Already Exist");
        price = Number(price * quantity);
        let updatedCart = { id, quantity, price };
        updatedCart = arrLocalStorageProduct.map((curProd) => {
            return (curProd.id === id) ? updatedCart : curProd;
        });
        console.log(updatedCart)
        localStorage.setItem('cartProductLS', JSON.stringify(updatedCart));
        //Show toast when product added to the cart
        showToast("add",id);


    }

    if (existingProd) {
        return false;
    }

    price = Number(price * quantity);
    quantity = Number(quantity);

    let UpdatedCart = { id, quantity, price };
    arrLocalStorageProduct.push(UpdatedCart);

    //Or we can write it like 
    // arrLocalStorageProduct.push({id,quantity,price});

    localStorage.setItem('cartProductLS', JSON.stringify(arrLocalStorageProduct));

    


    //Update Cart Button Value
    updateCartValue(arrLocalStorageProduct);
    //Show toast whe product added to the cart
    showToast("add",id);


}