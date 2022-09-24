import getMinifigs from "../api/getMiniFigs.js";
import getNumberOfItemsInCart from "../ui/getNumberOfItemsInCart.js";
import isProductInCart from "../validations/isProductInCart.js";
import {
    carouselContainer,
    carouselImageContainer,
    carouselIndicatorContainer,
    cartButton,
    currency,
    detailsTab,
    editProductButtonLink,
    legoProductBaseUrl,
    linkTab,
    modalCarouselImageContainer,
    modalCarouselIndicatorContainer,
    priceContainer,
    productModel,
    productTitle,
    rebrickableSetUrl,
} from "../variables.js";
import displayMiniFigs from "./displayMinifigs.js";
import getSearchParam from "./getSearchParams.js";
import isLinkOk from "./isLinkOk.js";
import toggleProductToAndFromCart from "./toggleProductToAndFromCart.js";

export default function displayProductDetails(arr) {
    // set title and populate fields:
    document.title = `Brickastle | ${arr.title} (${arr.productnumber})`;
    productModel.innerHTML = `Model: ${arr.productnumber}`;
    productTitle.innerHTML = arr.title;
    priceContainer.innerHTML = `${arr.price} ${currency}`;
    detailsTab.innerText = arr.description;
    detailsTab.innerText += "\nStock: " + arr.stock;
    if (arr.isProductionStopped) {
        detailsTab.innerText += "\nProductionstatus: Stopped.";
    }
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
            displayMiniFigs(arr);
        }
    });

    // display images:

    carouselImageContainer.dataset.defaultimg = arr.image_url;
    if (arr.image.data) {
        carouselImageContainer.innerHTML = "";
        arr.image.data.forEach((img, index) => {
            const smallImageUrl = img.attributes.formats.small.url;
            const fullSizeImageUrl = img.attributes.url;
            // add images to the modal carousel:
            modalCarouselIndicatorContainer.innerHTML += `
            <button type="button" data-bs-target="#modalimagecarousel" data-bs-slide-to="${index}" aria-label="Slide ${index + 1}" class=""></button>
            `;
            modalCarouselImageContainer.innerHTML += `
                <div class="carousel-item modalcarousel__slide-item">
                    <img src="${fullSizeImageUrl}" class="modalcarousel__slide-item-img" alt="..." />
                </div>
            `;

            // add images to the default carousel...
            if (index === 0) {
                carouselIndicatorContainer.innerHTML += `<button type="button" data-bs-target="#imagecarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>`;
                carouselImageContainer.innerHTML += `
                    <div class="carousel-item imagecarousel__item active">
                        <img src="${smallImageUrl}" data-fullsizeimg="${fullSizeImageUrl}" class="d-block w-100 imagecarousel__item-img" alt="${arr.title}" />
                    </div>`;
            } else {
                carouselIndicatorContainer.innerHTML += `<button type="button" data-bs-target="#imagecarousel" data-bs-slide-to="${index}" aria-label="Slide ${index + 1}"></button>`;
                carouselImageContainer.innerHTML += `
                    <div class="carousel-item imagecarousel__item">
                        <img src="${smallImageUrl}" data-fullsizeimg="${fullSizeImageUrl}" class="d-block w-100 imagecarousel__item-img" alt="${arr.title}" />
                    </div>`;
            }
        });
        // add eventlistener for carousel.

        carouselContainer.addEventListener("click", (e) => {
            const previouslyMarkedImages = document.querySelectorAll("#modalimagecarousel .carousel-item.active");
            const previouslyMarkedIndicators = document.querySelectorAll(`#modalimagecarousel .carousel-indicators button.active`);
            const allImages = document.querySelectorAll("#modalimagecarousel .carousel-item img");
            const currentFullsizeImage = e.target.dataset.fullsizeimg;
            if (currentFullsizeImage) {
                // remove previously marked indicators.
                if (previouslyMarkedIndicators) {
                    previouslyMarkedIndicators.forEach((element) => {
                        element.classList.remove("active");
                    });
                }
                // remove previously active image too...
                if (previouslyMarkedImages) {
                    previouslyMarkedImages.forEach((element) => {
                        element.classList.remove("active");
                    });
                }
                for (let i = 0; i < allImages.length; i++) {
                    // identify the corresponding image in the modal carousel.
                    if (allImages[i].src === currentFullsizeImage) {
                        allImages[i].parentElement.classList.add("active");
                        //Then also set the current indicator correct.
                        document.querySelector(`#modalimagecarousel button[data-bs-slide-to="${i}"]`).classList.add("active");
                        document.querySelector(`#modalimagecarousel button[data-bs-slide-to="${i}"]`).ariaCurrent = true;
                    }
                }
                // Actually open the modal by clicking a hidden button
                document.querySelector(`button[data-bs-target="#imageModal"]`).click();
            }
        });
    }

    // Handle toggling of product in and out of the cart.
    const currentId = getSearchParam("id");
    const isInCart = isProductInCart(currentId);
    if (isInCart) {
        // show "remove from cart";
        cartButton.innerHTML = "Remove from cart";
    } else {
        // show "Add to cart";
        cartButton.innerHTML = "Add to cart";
    }

    // Addeventlistener;

    cartButton.addEventListener("click", () => {
        toggleProductToAndFromCart(currentId);
        getNumberOfItemsInCart();
    });

    // set correct link for the edit-button:
    editProductButtonLink.href = "/admin/edit.html?id=" + currentId;
}
