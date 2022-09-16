import getMinifigs from "../api/getMiniFigs.js";
import { legoProductBaseUrl, rebrickableSetUrl } from "../variables.js";
import displayMiniFigs from "./displayMinifigs.js";
import isLinkOk from "./isLinkOk.js";

export default function displayProductDetails(arr) {
    console.log(arr);

    // Check if item is already in basket - Then change button to remove from cart.

    // const prodTitle = result.data.attributes.title;
    //     const prodPrice = result.data.attributes.price;
    //     const prodNumber = result.data.attributes.prodNumber;
    //const prodDesc = arr.description;
    //console.log(prodDesc);
    //const prodStopped = arr.isProductionStopped;
    //     const prodStock = result.data.attributes.stock;
    //     const prodImageArr = result.data.attributes.image.data;
    //     console.log(prodTitle);
    //     console.log(prodImageArr);

    const detailsTab = document.querySelector("#details-tab-pane");
    detailsTab.innerText = arr.description;
    detailsTab.innerText += "\nStock: " + arr.stock;
    if (arr.isProductionStopped) {
        detailsTab.innerText += "\nProductionstatus: Stopped.";
    }
    const linkTab = document.querySelector("#links-tab-pane");
    // make Lego-link:
    const legoProductLink = legoProductBaseUrl + arr.productnumber;
    isLinkOk(legoProductLink).then((isLegoLinkOk) => {
        if (isLegoLinkOk) {
            linkTab.innerHTML += `<p>Lego Official (Product): <a href="${legoProductLink}" target="blank">${legoProductLink}</a></p>`;
        }
    });
    // make Rebrickable-link:
    const rebrickableLink = rebrickableSetUrl + arr.productnumber + "-1/";
    isLinkOk(rebrickableLink).then((isReBrickableLinkOk) => {
        if (isReBrickableLinkOk) {
            linkTab.innerHTML += `<p>Rebrickable: <a href="${rebrickableLink}" target="blank">${rebrickableLink}</a></p>`;
        }
    });

    // Retrieve minifigs:
    getMinifigs(arr.productnumber).then((arr) => {
        if (arr.count > 0) {
            console.log("Attempt to display minifigs...");
            displayMiniFigs(arr);
        }
    });

    // display images:
    const imageArray = arr.image.data;
    const carouselIndicatorContainer = document.querySelector("#imagecarousel .carousel-indicators");
    const carouselImageContainer = document.querySelector("#imagecarousel .carousel-inner");
    arr.image.data.forEach((img, index) => {
        const smallImageUrl = img.attributes.formats.small.url;
        const fullSizeImageUrl = img.attributes.url;
        //console.log(smallImageUrl);
        //console.log(fullSizeImageUrl);
        // add indicators:
        if (index === 0) {
            console.log("This is the first image");
            carouselIndicatorContainer.innerHTML += `<button type="button" data-bs-target="#imagecarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>`;
            carouselImageContainer.innerHTML += `
                <div class="carousel-item active">
                    <img src="${smallImageUrl}" data-fullsizeimg="${fullSizeImageUrl}" class="d-block w-100" alt="${arr.title}" />
                </div>`;
        } else {
            carouselIndicatorContainer.innerHTML += `<button type="button" data-bs-target="#imagecarousel" data-bs-slide-to="${index}" aria-label="Slide ${index + 1}"></button>`;
            carouselImageContainer.innerHTML += `
                <div class="carousel-item">
                    <img src="${smallImageUrl}" data-fullsizeimg="${fullSizeImageUrl}" class="d-block w-100" alt="${arr.title}" />
                </div>`;
        }
        // add imgs`s
    });
}
