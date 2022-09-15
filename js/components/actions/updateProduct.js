import saveChangedProduct from "../api/saveChangedProduct.js";
import { prodIdField } from "../variables.js";

import createProductObject from "./createProductObject.js";

export default function updateProduct() {
    let prodObj = createProductObject();
    console.log(prodObj);
    const editId = prodIdField.value;
    console.log(editId);
    // const selectedDefaultImage = document.querySelector(".editimages input:checked");
    // if (selectedDefaultImage) {
    //     prodObj.data.image_url = document.querySelector(".editimages input:checked").parentElement.nextElementSibling.firstChild.src;
    // }

    saveChangedProduct(prodObj, editId);
}
