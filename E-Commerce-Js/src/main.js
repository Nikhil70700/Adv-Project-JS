import "./style.css";
import products from "../api/products.json"
import { showProductContainer } from "./homeProductCards";

//Calling a function named showProductContainer tha takes an array of products as an input.
showProductContainer(products);