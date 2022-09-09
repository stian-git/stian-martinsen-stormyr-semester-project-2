export default function addListenersToProductsPage() {
    const addToCartButtons = document.querySelectorAll(".product__header_imagecontainer_buymebanner");
    addToCartButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            console.log(e);
            console.log(button.dataset.id);
            console.log(button.dataset.img);
            console.log(button.dataset.model);
            console.log(button.dataset.price);
            console.log("Adding to basket");

            // is item already in Cart? ---otherwise qty = 1

            const productItem = {
                id: button.dataset.id,
                model: button.dataset.model,
                price: button.dataset.price,
                img: button.dataset.img,
            };
            console.log(productItem);
        });
    });
}
