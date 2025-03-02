import { addToCart } from "./addToCard"; // Ensure this file name is correct.
import { homeQuantityToggle } from "./homeQuantityToggle";

export const showProductContainer = (products) => {
  // Query the container and template when the function is called.
  const productContainer = document.querySelector("#productContainer");
  const productTemplate = document.querySelector("#productTemplate");

  // Check if both elements exist.
  if (!productContainer || !productTemplate) {
    console.error("Missing #productContainer or #productTemplate in the DOM.");
    return;
  }

  if (!products) {
    return false;
  }

  products.forEach((curProd) => {
    const { id, name, category, brand, price, stock, description, image } = curProd;

    // Clone the template content.
    const productClone = document.importNode(productTemplate.content, true);

    // Create a unique id for the toggle element (if it exists).
    const cardValueElement = productClone.querySelector("#cardValue");
    if (cardValueElement) {
      cardValueElement.setAttribute("id", `card${id}`);
    }

    // Populate the cloned template with product details.
    const categoryEl = productClone.querySelector(".category");
    if (categoryEl) categoryEl.textContent = category;

    const nameEl = productClone.querySelector(".productName");
    if (nameEl) nameEl.textContent = name;

    const imageEl = productClone.querySelector(".productImage");
    if (imageEl) {
      imageEl.src = image;
      imageEl.alt = name;
    }

    const stockEl = productClone.querySelector(".productStock");
    if (stockEl) stockEl.textContent = stock;

    const descriptionEl = productClone.querySelector(".productDescription");
    if (descriptionEl) descriptionEl.textContent = description;

    const brandEl = productClone.querySelector(".productBrand");
    if (brandEl) brandEl.textContent = brand;

    const priceEl = productClone.querySelector(".productPrice");
    if (priceEl) priceEl.textContent = `₹${price}`;

    const actualPriceEl = productClone.querySelector(".productActualPrice");
    if (actualPriceEl) actualPriceEl.textContent = `₹${price * 4}`;

    // Attach event listener for toggling stock/quantity.
    const stockElement = productClone.querySelector(".stockElement");
    if (stockElement) {
      stockElement.addEventListener("click", (event) => {
        homeQuantityToggle(event, id, stock);
      });
    }

    // Attach event listener for "Add to Cart" button.
    const addToCartButton = productClone.querySelector(".add-to-cart-button");
    if (addToCartButton) {
      addToCartButton.addEventListener("click", (event) => {
        addToCart(event, id, stock);
      });
    }

    // Append the populated product card to the container.
    productContainer.append(productClone);
  });
};
