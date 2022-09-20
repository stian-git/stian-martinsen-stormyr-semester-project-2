import updateItemInCart from "../actions/updateItemInCart.js";
import deleteProduct from "../api/deleteProduct.js";
//import { storeCartContent } from "../variables.js";

export default function addListenersToProductsPage() {
    // adding "Add to cart"-evenlistener:
    const addToCartButtons = document.querySelectorAll(".product__header_imagecontainer_buymebanner");
    addToCartButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            const productObj = {
                id: button.dataset.id,
                qty: 1,
                model: button.dataset.model,
                title: button.dataset.title,
                price: button.dataset.price,
                img: button.dataset.img,
            };
            updateItemInCart(button.dataset.id, 1, productObj);
        });
    });

    const editButtons = document.querySelectorAll(".editproductbutton");
    editButtons.forEach((editbutton) => {
        editbutton.addEventListener("click", (e) => {
            e.preventDefault();
            //console.log(editbutton);
            const prodId = editbutton.parentElement.dataset.prodid;
            window.location.href = "/admin/edit.html?id=" + prodId;
        });
    });

    const deleteButtons = document.querySelectorAll(".deleteproductbutton");
    deleteButtons.forEach((deletebutton) => {
        deletebutton.addEventListener("click", (e) => {
            e.preventDefault();
            const prodId = deletebutton.parentElement.dataset.prodid;
            //console.log("We will now delete this item: " + prodId);
            deleteProduct(prodId, deletebutton);
        });
    });
}
