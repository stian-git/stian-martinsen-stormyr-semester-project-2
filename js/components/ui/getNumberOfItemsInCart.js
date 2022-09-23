import { cartNavItem, storeCartContent } from "../variables.js";

export default function getNumberOfItemsInCart() {
    const currentCartItems = JSON.parse(localStorage.getItem(storeCartContent));
    if (currentCartItems) {
        let numberOfItems = 0;
        currentCartItems.forEach((item) => {
            numberOfItems += item.qty;
        });
        if (numberOfItems === 0) {
            cartNavItem.innerHTML = "Cart";
        } else {
            cartNavItem.innerHTML = `Cart (${numberOfItems})`;
        }
    }
}
