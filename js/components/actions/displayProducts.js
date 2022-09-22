import addListenersToProductsPage from "../ui/addListenersToProductsPage.js";
import toggleUserFeatures from "../ui/toggleUserFeatures.js";
import { currency, productlist } from "../variables.js";

export default function displayProducts(arr) {
    //const productlist = document.querySelector("#productlist");
    productlist.innerHTML = "";
    arr.forEach((product) => {
        //console.log(product);
        // title, image_url, price, productnumber, stock

        productlist.innerHTML += `
        <div class="col">
            <a href="productdetails.html?id=${product.id}">
                  <div class="card h-100">
                    <div class="product__header_imagecontainer">
                        <img src="${product.attributes.image_url}" class="card-img-top product__header_imagecontainer_image" alt="...">
                        <div class="product__header_imagecontainer_buymebanner" data-id="${product.id}" data-title="${product.attributes.title}" data-model="${product.attributes.productnumber}" data-img="${product.attributes.image_url}" data-price="${product.attributes.price}" >Add to cart.</div>
                    </div>
                    <div class="card-body">
                      <h6 class="card-title">${product.attributes.title}</h6>
                      <!-- <p class="card-text"> -->
                        <div class="product__details-row card-text">
                            <p class="product__details_price">${product.attributes.price}<span class="currency"> ${currency}</span></p>
                            <p class="product__details_stock">Stock: ${product.attributes.stock}</p>
                        </div>
                    <!-- </p> -->
                    </div>
                    <div class="card-footer" data-prodid="${product.id}">
                        <small class="text-muted editproductbutton">Edit</small>
                        <small class="text-muted deleteproductbutton">Delete</small>
                      </div>
                  </div>
            </a>
        </div>`;
    });
    // adding eventlisteners
    addListenersToProductsPage();
    toggleUserFeatures();
}
