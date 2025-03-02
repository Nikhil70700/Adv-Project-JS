import "./style.css";
import products from "../api/products.json"; // Adjust the path as needed.
import { showProductContainer } from "./homeProductCards";
import { updateCartValue } from "./updateCartValue";

document.addEventListener("DOMContentLoaded", () => {
  // Populate the product container with the products data.
  showProductContainer(products);

  // Update the cart value from localStorage.
  const cartProducts = localStorage.getItem("cartProductLS")
    ? JSON.parse(localStorage.getItem("cartProductLS"))
    : [];
  updateCartValue(cartProducts.length);
});
