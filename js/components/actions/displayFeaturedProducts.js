// Use width to calculate the number of featured products to show in each

import { colWidth, moreColsOnOffsetWidth, featuredCarouselContainer } from "../variables.js";

// carousel-item
export default function displayFeaturedProducts(arr) {
    featuredCarouselContainer.innerHTML = "";
    // calculate number of cards per row and number of rows needed.
    const cardsInRow = 1 + Math.ceil(featuredCarouselContainer.offsetWidth - moreColsOnOffsetWidth / colWidth);
    const rowsToBuild = Math.ceil(arr.length / cardsInRow);
    // Build the carousel "rows":
    for (let j = 0; j < rowsToBuild; j++) {
        const rowClass = "carousel-item-row" + j;
        featuredCarouselContainer.innerHTML += `
        <div class="featured__container carousel-item ${rowClass}" data-bs-interval="40000">
            <div class="featured__containerrow row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-2"></div>
        </div>`;
    }

    // Then add each featured product in the correct row.
    for (let i = 0; i < arr.length; i++) {
        // Calculates the correct row:
        const rowToGoTo = Math.floor(i / cardsInRow);
        // We use the rownumber to identify the row-element to put it into
        const carouselRowElement = document.querySelector("#featuredproducts .carousel-item-row" + rowToGoTo + " .row");
        carouselRowElement.innerHTML += `
        <a href="/productdetails.html?id=${arr[i].id}" class="featured__containerrow-link" aria-label="Link to ${arr[i].attributes.title}" title="Link to ${arr[i].attributes.title}">
                <div class="col featured__wrapper" data-id="${arr[i].id}">
                    <div class="card h-100 featured__wrapper-card">
                        <div class="card-img featured__wrapper-card-imgbox">
                            <img src="${arr[i].attributes.image_url}" class="card-img-top featured__wrapper-card-imgbox-img" aria-label="Image of ${arr[i].attributes.title}" title="Image of ${arr[i].attributes.title}" alt="Image of ${arr[i].attributes.title}" />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title featured__wrapper-card-title">${arr[i].attributes.title}</h5>
                            <p class="card-text">${arr[i].attributes.price} EUR</p>
                        </div>
                        <div class="card-footer">Model: ${arr[i].attributes.productnumber}</div>
                    </div>
                </div>
            </a>
        `;
    }

    // set first carousel-item as the active.
    document.querySelector("#featuredproducts .carousel-item").classList.add("active");
}
