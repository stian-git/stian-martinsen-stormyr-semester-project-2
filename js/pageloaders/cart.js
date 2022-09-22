import displayCart from "../components/actions/displayCart.js";
import getNumberOfItemsInCart from "../components/ui/getNumberOfItemsInCart.js";
import getTotalCartPrice from "../components/ui/getTotalCartPrice.js";
import { emptyCartButton, storeCartContent } from "../components/variables.js";

displayCart();
getTotalCartPrice();
emptyCartButton.addEventListener("click", () => {
    localStorage.setItem(storeCartContent, "[]");
    displayCart();
    getNumberOfItemsInCart();
});
