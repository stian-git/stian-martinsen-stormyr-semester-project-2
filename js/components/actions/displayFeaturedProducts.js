// Use width to calculate the number of featured products to show in each
// carousel-item
export default function displayFeaturedProducts(arr) {
    console.log(arr[0]);
    // variables used to calculate number of rows.
    const moreColsOnOffsetWidth = 328;
    const colWidth = 153;
    //console.log(arr);
    //console.log(window.innerWidth);
    const carouselContainer = document.querySelector(".carousel-inner");
    //empty current carousel:
    carouselContainer.innerHTML = "";
    const cardsInRow = 1 + Math.ceil((carouselContainer.offsetWidth - moreColsOnOffsetWidth) / colWidth);
    const rowsToBuild = Math.ceil(arr.length / cardsInRow);
    // Build the carousel "rows":
    for (let j = 0; j < rowsToBuild; j++) {
        console.log("Building row: " + j);
        carouselContainer.innerHTML += `
        <div class="carousel-item carousel-item-row${j}" data-bs-interval="40000">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-2">
            </div>
        </div>
        `;
    }
    // Then add each featured product in the correct row.
    for (let i = 0; i < arr.length; i++) {
        const prodTitle = arr[i].attributes.title;
        console.log(prodTitle);
        // Calculates the correct row:
        const rowToGoTo = Math.floor(i / cardsInRow);
        // Use the rownumber to identify the row-element to put it into
        const carouselRowElement = document.querySelector(".carousel-item-row" + rowToGoTo + " .row");
        carouselRowElement.innerHTML += `
                <div class="col">
                    <div class="card h-100">
                        <div class="card-img">
                            <img src="${arr[i].attributes.image_url}" class="card-img-top" alt="..." />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${arr[i].attributes.title}</h5>
                            <p class="card-text">${arr[i].attributes.price} EUR</p>
                        </div>
                        <div class="card-footer">Model: ${arr[i].attributes.productnumber}</div>
                    </div>
                </div>
        `;
    }

    // set first carousel-item as the active.
    document.querySelector(".carousel-item").classList.add("active");
}

// < 576 = 1 // offset =< 328                   0
// >= 576 = 2 // offset = 329                   1<153
// >= 768 = 3 // offset = 482 - 153 = 329       154<307
// 1200 = 4 // offset = 636 - 154 = 482         308

// 290*x = 580

// 10em * 2 = 320px = padding on Main
// margin = 20vw =
