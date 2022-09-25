import { minLengthProdNumber, minLengthProdTitle, prodNumberField, prodPriceField, prodStockField, prodTitleField } from "../variables.js";
import minLengthCheck from "./minLengthCheck.js";

export default function productFormValidation() {
    const isOkprodNumber = minLengthCheck(prodNumberField.value, minLengthProdNumber);
    const isOkprodName = minLengthCheck(prodTitleField.value, minLengthProdTitle);
    const isOkprodPrice = prodPriceField.value !== "";
    const isOkprodStock = prodStockField.value !== "";
    if (isOkprodNumber && isOkprodName && isOkprodPrice && isOkprodStock) {
        // Form validation OK.
        return true;
    } else {
        // Validation failed.
        return false;
    }
}
