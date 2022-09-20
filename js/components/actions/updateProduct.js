import saveChangedProduct from "../api/saveChangedProduct.js";
import { prodIdField } from "../variables.js";

import createProductObject from "./createProductObject.js";

export default function updateProduct() {
    let prodObj = createProductObject();
    const editId = prodIdField.value;
    saveChangedProduct(prodObj, editId);
}
