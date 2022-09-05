import { baseUrl } from "../variables.js";

// console.log("Test");

// const buyButton = document.querySelector(".product__header_imagecontainer_buymebanner");

// buyButton.addEventListener("click", buyNow);

// function buyNow(e) {
//     e.preventDefault();
//     console.log("I bought this!");
// }

export default function getProducts(getFeaturedOnly = false) {
    let getProductsUrl = baseUrl + "api/products?populate=*";
    if (getFeaturedOnly === true) {
        getProductsUrl += "&filters[featured][$eq]=true";
    }
    console.log(getProductsUrl);
    // make the call with the generated url below:
}
