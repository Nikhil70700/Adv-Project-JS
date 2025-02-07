import { addToCart } from "./addToCard";
import { homeQuantityToggle } from "./homeQuantityToggle";

const productContainer=document.querySelector("#productContainer");

const productTemplate=document.querySelector("#productTemplate");

export const showProductContainer=(products)=>{
    if(!products){
        return false;
    }


    products.forEach((curProd)=>{
        const{id , name , category , brand ,price,stock ,description,image}=curProd;

        
        const productClone=document.importNode(productTemplate.content,true);



        //Creating Unique id for Button Toggle

        productClone.querySelector('#cardValue').setAttribute('id',`card${id}`);


        //Card Section

        productClone.querySelector(".category").textContent=category;
        productClone.querySelector(".productName").textContent=name;
        productClone.querySelector(".productImage").src=image;
        productClone.querySelector(".productImage").alt=name;
        productClone.querySelector(".productStock").textContent=stock;
        productClone.querySelector(".productDescription").textContent=description;
        productClone.querySelector(".productBrand").textContent=brand;
        productClone.querySelector(".productPrice").textContent=`₹${price}`;
        productClone.querySelector(".productActualPrice").textContent=`₹${price * 4}`;

        

        productClone.querySelector(".stockElement").addEventListener('click', (event)=>{
            homeQuantityToggle(event,id,stock);
        })

        //Add to Cart

        productClone.querySelector('.add-to-cart-button').addEventListener('click',(event)=>{
            addToCart(event,id,stock);
        });

        productContainer.append(productClone );
        });
}