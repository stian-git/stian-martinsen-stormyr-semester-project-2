import { prodDescField, prodIsFeaturedField, prodIsStoppedField, prodNumberField, prodPriceField, prodStockField, prodTitleField } from "../variables.js";

export default function createProductObject() {
    console.log("Creating object..");
    return {
        data: {
            title: prodTitleField.value,
            description: prodDescField.value,
            price: prodPriceField.value,
            stock: prodStockField.value,
            productnumber: prodNumberField.value,
            image_url: "https://www.dagbladet.com",
            isProductionStopped: prodIsStoppedField.checked,
            featured: prodIsFeaturedField.checked,
        },
    };
}
