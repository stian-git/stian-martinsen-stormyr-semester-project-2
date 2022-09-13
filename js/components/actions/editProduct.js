import { prodDescField, prodIdField, prodIsFeaturedField, prodIsStoppedField, prodNumberField, prodPriceField, prodStockField, prodTitleField } from "../variables.js";
import getSearchParam from "./getSearchParams.js";

export default function editProduct(prodObj) {
    console.log(prodObj);
    //console.log(getSearchParam("id"));
    prodIdField.value = getSearchParam("id");
    prodNumberField.value = prodObj.productnumber;
    prodTitleField.value = prodObj.title;
    prodDescField.value = prodObj.description;
    prodPriceField.value = prodObj.price;
    prodStockField.value = prodObj.stock;
    prodIsFeaturedField.checked = prodObj.featured;
    prodIsStoppedField.checked = prodObj.isProductionStopped;
    //console.log("Images...");
    const imageContainer = document.querySelector(".editimages tbody");
    prodObj.image.data.forEach((image) => {
        //console.log(image.attributes);
        //console.log(image.attributes.url);
        //console.log(image.attributes.formats.thumbnail.url);
        //console.log(image.id);
        imageContainer.innerHTML += `
            <tr>
                <td><input type="radio" name="defaultImage" id="${image.id}"></td>
                <td><img src="${image.attributes.formats.thumbnail.url}" data-largeimg="${image.attributes.url}" class="thumbnail"></td>
                <td>X</td>
            </tr>`;
    });
    //console.log(prodObj.image.data);
}
