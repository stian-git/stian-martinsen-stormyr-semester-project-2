console.log("Test");

const buyButton = document.querySelector(".product__header_imagecontainer_buymebanner");

buyButton.addEventListener("click", buyNow);

function buyNow(e) {
    e.preventDefault();
    console.log("I bought this!");
}
