import getTotalCartPrice from "../ui/getTotalCartPrice.js";
import { cartContainer, cartsummary, cartTable, mainElement, storeCartContent } from "../variables.js";
import updateItemInCart from "./updateItemInCart.js";

export default function displayCart() {
    cartContainer.innerHTML = "";
    const currentItemsInCart = JSON.parse(localStorage.getItem(storeCartContent));
    if (!currentItemsInCart || currentItemsInCart.length === 0) {
        cartTable.style.display = "none";
        cartsummary.style.display = "none";
        mainElement.innerHTML += `
        <p>There are no items in the cart.</p>`;
    } else {
        currentItemsInCart.forEach((item) => {
            const linePrice = item.price * item.qty;
            cartContainer.innerHTML += `
            <tr>
                <td><img src="${item.img}" class="cart__row-img" aria-label="Thumbnail of ${item.title}" title="Thumbnail of ${item.title}" alt="Thumbnail of ${item.title}"/></td>
                <td><a href="productdetails.html?id=${item.id}" class="cart__row-productlink">${item.title} (${item.model})</a></td>
                <td>${item.price}</td>
                <td>${item.qty}</td>
                <td class="lineprice">${linePrice}</td>
                <td><i class="fa-solid fa-trash cart__row-trashicon" data-id="${item.id}"></i></td>
            </tr>
            `;
        });
        // add eventlisteners...
        const allDeleteButtons = document.querySelectorAll("i.fa-trash");
        allDeleteButtons.forEach((deletebutton) => {
            deletebutton.addEventListener("click", (e) => {
                updateItemInCart(e.target.dataset.id);
                displayCart();
                getTotalCartPrice();
            });
        });
    }
}
