// Use width to calculate the number of featured products to show in each
// carousel-item
export default function displayFeaturedProducts(arr) {
    console.log("Running displayFeaturedProducts...");
    //variables used to calculate number of rows.
    const moreColsOnOffsetWidth = 328;
    const colWidth = 153;
    const carouselContainer = document.querySelector("#featuredproducts .carousel-inner");
    //empty current carousel:
    carouselContainer.innerHTML = "";
    const cardsInRow = 1 + Math.ceil((carouselContainer.offsetWidth - moreColsOnOffsetWidth) / colWidth);
    const rowsToBuild = Math.ceil(arr.length / cardsInRow);
    // Build the carousel "rows":
    // for (let j = 0; j < rowsToBuild; j++) {
    //     //console.log("Building row: " + j);
    //     carouselContainer.innerHTML += `
    //     <div class="featured__container carousel-item carousel-item-row${j}" data-bs-interval="40000">
    //         <div class="featured__containerrow row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-2">
    //         </div>
    //     </div>
    //     `;
    // }
    // // Then add each featured product in the correct row.
    // for (let i = 0; i < arr.length; i++) {
    //     // Calculates the correct row:
    //     const rowToGoTo = Math.floor(i / cardsInRow);
    //     // Use the rownumber to identify the row-element to put it into
    //     const carouselRowElement = document.querySelector("#featuredproducts .carousel-item-row" + rowToGoTo + " .row");
    //     carouselRowElement.innerHTML += `
    //             <div class="col featured__wrapper" data-id="${arr[i].id}">
    //                 <div class="card h-100 featured__wrapper-card">
    //                     <div class="card-img featured__wrapper-card-imgbox">
    //                         <img src="${arr[i].attributes.image_url}" class="card-img-top featured__wrapper-card-imgbox-img" aria-label="Image of ${arr[i].attributes.title}" title="Image of ${arr[i].attributes.title}" alt="Image of ${arr[i].attributes.title}" />
    //                     </div>
    //                     <div class="card-body">
    //                         <h5 class="card-title">${arr[i].attributes.title}</h5>
    //                         <p class="card-text">${arr[i].attributes.price} EUR</p>
    //                     </div>
    //                     <div class="card-footer">Model: ${arr[i].attributes.productnumber}</div>
    //                 </div>
    //             </div>
    //     `;
    // }

    // // set first carousel-item as the active.
    // document.querySelector("#featuredproducts .carousel-item").classList.add("active");

    // // add eventlisteners:

    // const allFeaturedProducts = document.querySelectorAll("#featuredproducts .col");
    // allFeaturedProducts.forEach((element) => {
    //     element.addEventListener("click", (e) => {
    //         // We catches the ID from any of the clickable elements:
    //         let id;
    //         switch (e.path.length) {
    //             case 14:
    //                 id = e.target.parentElement.parentElement.parentElement.dataset.id;
    //                 break;
    //             case 13:
    //                 id = e.target.parentElement.parentElement.dataset.id;
    //                 break;
    //             case 12:
    //                 id = e.target.parentElement.dataset.id;
    //                 break;
    //             case 11:
    //                 id = e.target.dataset.id;
    //                 break;
    //             default:
    //                 id = "";
    //                 break;
    //         }

    //         // only forward the user to products page if id is found.
    //         if (!isNaN(parseInt(id))) {
    //             //console.log("ID is a number and we will forward: " + id);
    //             window.location.href = "/productdetails.html?id=" + id;
    //         }
    //     });
    // });
}

// < 576 = 1 // offset =< 328                   0
// >= 576 = 2 // offset = 329                   1<153
// >= 768 = 3 // offset = 482 - 153 = 329       154<307
// 1200 = 4 // offset = 636 - 154 = 482         308

// 290*x = 580

// 10em * 2 = 320px = padding on Main
// margin = 20vw =
