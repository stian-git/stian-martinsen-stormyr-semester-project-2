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
        <div class="col productlist__product">
            <a href="productdetails.html?id=${product.id}" class="productcard">
                  <div class="card h-100 productcard__box">
                    <div class="product__header_imagecontainer productcard__box-imagewrapper">
                        <img src="${product.attributes.image_url}" class="productcard__box-imagewrapper-img card-img-top product__header_imagecontainer_image" alt="...">
                        <div class="product__header_imagecontainer_buymebanner productcard__box-imagewrapper-banner" data-id="${product.id}" data-title="${product.attributes.title}" data-model="${product.attributes.productnumber}" data-img="${product.attributes.image_url}" data-price="${product.attributes.price}" >Add to cart.</div>
                    </div>
                    <div class="card-body productcard__box-body">
                      <h6 class="card-title">${product.attributes.title}</h6>
                      <!-- <p class="card-text"> -->
                        <div class="product__details-row card-text productcard__box-details" >
                            <p class="product__details_price productcard__box-details-price">${product.attributes.price}<span class="currency productcard__box-details-price-currency"> ${currency}</span></p>
                            <p class="product__details_stock productcard__box-details-stock">Stock: ${product.attributes.stock}</p>
                        </div>
                    <!-- </p> -->
                    </div>
                    <div class="card-footer productcard__box-footer" data-prodid="${product.id}">
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
