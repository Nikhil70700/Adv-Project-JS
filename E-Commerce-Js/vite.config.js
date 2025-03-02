import { defineConfig } from "vite";
import {resolve} from 'path';

export default defineConfig({
    build:{
        rollupOptions:{
            input:{
                main:resolve(__dirname,'./index.html'),//main entry point (e.g. :homepage)
                about:resolve(__dirname,"./src/about.html"),//Additional Html pages
                contact:resolve(__dirname,"./src/contact.html"),
                products:resolve(__dirname,"./src/products.html"),
                addToCart:resolve(__dirname,"./src/addToCart.html"),
                signIn:resolve(__dirname,"./src/signIn.html"),
                singUp:resolve(__dirname,"./src/singUp.html")
                //Add more entry points for other HTML files as needed
            },
        },
    },
});