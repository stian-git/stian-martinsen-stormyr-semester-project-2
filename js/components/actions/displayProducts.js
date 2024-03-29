import addListenersToProductsPage from "../ui/addListenersToProductsPage.js";
import toggleUserFeatures from "../ui/toggleUserFeatures.js";
import { currency, placeHolderThumb, productlist } from "../variables.js";

export default function displayProducts(arr) {
    productlist.innerHTML = "";
    arr.forEach((product) => {
        if (!product.attributes.image_url) {
            // Adds placeHolderImage.
            product.attributes.image_url = placeHolderThumb;
        }
        productlist.innerHTML += `
        <div class="col productlist__product">
            <a href="productdetails.html?id=${product.id}" class="productcard">
                  <div class="card h-100 productcard__box">
                    <div class="product__header_imagecontainer productcard__box-imagewrapper">
                        <img src="${product.attributes.image_url}" class="productcard__box-imagewrapper-img card-img-top product__header_imagecontainer_image" aria-label="Image of ${product.attributes.title}" title="Image of ${product.attributes.title}" alt="Image of ${product.attributes.title}">
                        <div class="product__header_imagecontainer_buymebanner productcard__box-imagewrapper-banner" data-id="${product.id}" data-title="${product.attributes.title}" data-model="${product.attributes.productnumber}" data-img="${product.attributes.image_url}" data-price="${product.attributes.price}" >Add to cart.</div>
                    </div>
                    <div class="card-body productcard__box-body">
                        <h6 class="card-title productcard__box-body-title">${product.attributes.title}</h6>
                        <div class="product__details-row card-text productcard__box-details" >
                            <p class="product__details_price productcard__box-details-price">${product.attributes.price}<span class="currency productcard__box-details-price-currency"> ${currency}</span></p>
                            <p class="product__details_stock productcard__box-details-stock">Stock: ${product.attributes.stock}</p>
                        </div>
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
