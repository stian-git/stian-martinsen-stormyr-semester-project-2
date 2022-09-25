import { storeCartContent } from "../variables.js";

export default function isProductInCart(id) {
    const currentItemsInCart = JSON.parse(localStorage.getItem(storeCartContent));
    if (!currentItemsInCart) {
        return false;
    }
    const result = Boolean(currentItemsInCart.find((element) => element.id === id));
    return result;
}
