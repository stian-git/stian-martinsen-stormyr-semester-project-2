import { prodDescField, prodIdField, prodIsFeaturedField, prodIsStoppedField, prodNumberField, prodPriceField, prodStockField, prodTitleField } from "../variables.js";
import displayEditImages from "./displayEditImages.js";
import getSearchParam from "./getSearchParams.js";

export default function editProduct(prodObj) {
    prodIdField.value = getSearchParam("id");
    prodNumberField.value = prodObj.productnumber;
    prodTitleField.value = prodObj.title;
    prodDescField.value = prodObj.description;
    prodPriceField.value = prodObj.price;
    prodStockField.value = prodObj.stock;
    prodIsFeaturedField.checked = prodObj.featured;
    prodIsStoppedField.checked = prodObj.isProductionStopped;

    if (prodObj.image.data) {
        prodObj.image.data.forEach((image) => {
            displayEditImages(image.id, image.attributes.formats.thumbnail.url, image.attributes.url);
        });
    }
}
