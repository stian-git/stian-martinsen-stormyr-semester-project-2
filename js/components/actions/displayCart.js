import getTotalCartPrice from "../ui/getTotalCartPrice.js";
import { storeCartContent } from "../variables.js";
import updateItemInCart from "./updateItemInCart.js";
// import { updateItemInCart } from "../actions/updateItemInCart.js";

export default function displayCart() {
    const cartContainer = document.querySelector("table.cart tbody");
    cartContainer.innerHTML = "";

    //console.log(cartContainer);
    const currentItemsInCart = JSON.parse(localStorage.getItem(storeCartContent));
    //console.log(currentItemsInCart);
    if (!currentItemsInCart || currentItemsInCart.length === 0) {
        console.log("Nothing to display...");
        // Display a message to the user!
        document.querySelector("table.cart").style.display = "none";
        document.querySelector(".cartsummary").style.display = "none";
        document.querySelector("main").innerHTML += `
        
        <p>There are no items in the cart.</p>`;
    } else {
        currentItemsInCart.forEach((item) => {
            const linePrice = item.price * item.qty;
            cartContainer.innerHTML += `
            <tr>
                <td><img src="${item.img}" /></td>
                <td><a href="productdetails.html?id=${item.id}">${item.title} (${item.model})</a></td>
                <td>${item.price}</td>
                <td>${item.qty}</td>
                <td class="lineprice">${linePrice}</td>
                <td><i class="fa-solid fa-trash" data-id="${item.id}"></i></td>
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
