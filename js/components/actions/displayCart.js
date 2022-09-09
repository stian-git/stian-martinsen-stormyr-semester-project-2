import { storeCartContent } from "../variables.js";

export default function displayCart() {
    const cartContainer = document.querySelector("table.cart tbody");
    console.log(cartContainer);
    const currentItemsInCart = JSON.parse(localStorage.getItem(storeCartContent));
    //console.log(currentItemsInCart);
    if (!currentItemsInCart) {
        console.log("Nothing to display...");
        // Display a message to the user!
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
                <td>X</td>
            </tr>
            `;
        });
    }
}
