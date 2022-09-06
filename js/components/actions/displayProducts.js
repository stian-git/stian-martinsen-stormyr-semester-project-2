export default function displayProducts(arr) {
    const productlist = document.querySelector("#productlist");
    productlist.innerHTML = "";
    arr.forEach((product) => {
        console.log(product);
        // title, image_url, price, productnumber, stock

        productlist.innerHTML += `
        <div class="col">
            <a href="products.html?id=${product.attributes.productnumber}">
                  <div class="card h-100">
                    <div class="product__header_imagecontainer">
                        <img src="${product.attributes.image_url}" class="card-img-top product__header_imagecontainer_image" alt="...">
                        <div class="product__header_imagecontainer_buymebanner">Add to cart.</div>
                    </div>
                    <div class="card-body">
                      <h6 class="card-title">${product.attributes.title}</h6>
                      <!-- <p class="card-text"> -->
                        <div class="product__details-row card-text">
                            <p class="product__details_price">${product.attributes.price} EUR</p>
                            <p class="product__details_stock">In stock: ${product.attributes.stock}</p>
                        </div>
                    <!-- </p> -->
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Edit</small>
                        <small class="text-muted">Delete</small>
                      </div>
                  </div>
            </a>
        </div>`;
    });
}
