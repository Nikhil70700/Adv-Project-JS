import { getCartProductFromLS } from "./getCartProducts.js";
import { showToast } from "./showToast.js";
import { updateCartValue } from "./updateCartValue.js";

// Load cart data on page load
getCartProductFromLS();

// Function to add a product to cart
export const addToCart = (event, id, stock) => {
  let arrLocalStorageProduct = getCartProductFromLS();

  const currentProdElem = document.querySelector(`#card${id}`);
  let quantity = currentProdElem.querySelector(".productQuantity").innerText;
  let price = currentProdElem.querySelector(".productPrice").innerText;
  

  price = price.replace("₹", ""); // Remove currency symbol

  let existingProd = arrLocalStorageProduct.find((curProd) => curProd.id === id);

  if (existingProd) {
    // If product already exists, update its quantity
    existingProd.quantity = Number(existingProd.quantity) + Number(quantity);
    existingProd.price = Number(price) * existingProd.quantity;

    // Update the localStorage
    localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

    // Show toast notification
    showToast("add", id);

    // Update cart value in UI
    updateCartValue(arrLocalStorageProduct);
    return;
  }

  // Convert quantity & price to numbers
  price = Number(price) * Number(quantity);
  quantity = Number(quantity);

  // Add new product to the cart
  arrLocalStorageProduct.push({ id, quantity, price });
  localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

  // Update cart UI
  updateCartValue(arrLocalStorageProduct);

  // Show toast notification
  showToast("add", id);
};
