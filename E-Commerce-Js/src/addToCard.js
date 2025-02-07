import { getCartProductFromLS } from "./getCartProducts";

export const addToCart=(event,id,stock)=>{


let arrLocalStorageProduct=getCartProductFromLS();


    const currentProductElem=document.querySelector(`#card${id}`);
    let quantity=currentProductElem.querySelector('.productQuantity').innerText;
    let price=currentProductElem.querySelector('.productPrice').innerText;

    // console.log(quantity,price);

    price=price.replace ("₹","");
    price=Number(price*quantity);
    quantity=Number(quantity);

    let UpdatedCart={id,quantity,price};
    arrLocalStorageProduct.push(UpdatedCart);

    //Or we can write it like 
    // arrLocalStorageProduct.push({id,quantity,price});

    localStorage.setItem('cartProductLS',JSON.stringify(arrLocalStorageProduct));


    console.log(quantity,price);
    
}