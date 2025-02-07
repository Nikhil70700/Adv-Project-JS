import "./style.css";
import products from "../api/products.json"
import { showProductContainer } from "./homeProductCards";
import { updateCartValue } from "./updateCartValue";
document.addEventListener("DOMContentLoaded" , () =>{

    //Calling a function named showProductContainer tha takes an array of products as an input.
    showProductContainer(products);

    const dataLength = (localStorage.getItem("cartProductLS") ? JSON.parse(localStorage.getItem("cartProductLS")).length : 0);

    updateCartValue(dataLength);
})
