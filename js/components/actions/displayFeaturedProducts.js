// Use width to calculate the number of featured products to show in each
// carousel-item
export default function displayFeaturedProducts(arr) {
    const moreColsOnOffsetWidth = 328;
    const colWidth = 153;
    //console.log(arr);
    //console.log(window.innerWidth);
    const carouselContainer = document.querySelector(".carousel-inner");
    //console.log("Carousel width: " + carouselContainer.offsetWidth);
    //carouselContainer = "";
    const cardsInRow = 1 + Math.ceil((carouselContainer.offsetWidth - moreColsOnOffsetWidth) / colWidth);

    console.log("Cards in row: " + cardsInRow);
    const rowsToBuild = Math.ceil(arr.length / cardsInRow);
    console.log("Rows to build: " + rowsToBuild);

    for (let j = 1; j <= rowsToBuild; j++) {
        console.log("Building row: " + j);
        carouselContainer.innerHTML += `
        <div class="carousel-item carousel-item-row${j}" data-bs-interval="4000">
        </div>
        `;
    }

    for (let i = 1; i < arr.length + 1; i++) {
        console.log(i);
        //console.log(i % cardsInRow);
        const rowToGoTo = Math.ceil(0 + i / cardsInRow);
        //console.log(rowToGoTo);
        //const carouselRowClass = ".carousel-item-row" + rowToGoTo;
        //console.log(carouselRowClass);
        const carouselRowElement = document.querySelector(".carousel-item-row" + rowToGoTo);
        //console.log(carouselRowElement);
        //console.log(Math.ceil(0 + i / cardsInRow));

        carouselRowElement.innerHTML += `
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-4">
                <div class="col">
                    <div class="card h-100">
                        <img src="images/product/10305_alt1.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Lion Knights Castle</h5>
                            <p class="card-text">350 EUR</p>
                        </div>
                        <div class="card-footer">Some Info</div>
                    </div>
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
