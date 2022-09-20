import { storeCartContent } from "../variables.js";

export default function isProductInCart(id) {
    //console.log(id);
    const currentItemsInCart = JSON.parse(localStorage.getItem(storeCartContent));
    const result = Boolean(currentItemsInCart.find((element) => element.id === id));
    return result;
}
