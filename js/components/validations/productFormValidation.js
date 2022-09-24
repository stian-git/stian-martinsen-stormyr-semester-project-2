import { prodNumberField, prodTitleField } from "../variables.js";
import minLengthCheck from "./minLengthCheck.js";

export default function productFormValidation() {
    //let isOk = true;
    const minimumLength = 3;
    const isOkprodNumber = minLengthCheck(prodNumberField.value, minimumLength);
    const isOkprodName = minLengthCheck(prodTitleField.value, minimumLength);

    if (isOkprodNumber && isOkprodName) {
        // enable continuebutton
        return true;
    } else {
        return false;
    }
}
