import { placeHolderThumb, prodDescField, prodIsFeaturedField, prodIsStoppedField, prodNumberField, prodPriceField, prodStockField, prodTitleField } from "../variables.js";

export default function createProductObject() {
    // if (!prodDescField.value) {
    //     prodDescField.value = " ";
    // }
    let selectedImage = placeHolderThumb;
    const anyImageRadioButtonExists = document.querySelector(".editimages input[type=radio]");
    const selectedImageRadioButtonExists = document.querySelector(".editimages input[type=radio]:checked");
    if (selectedImageRadioButtonExists) {
        selectedImage = selectedImageRadioButtonExists.parentElement.parentElement.children[1].firstChild.src;
    } else if (anyImageRadioButtonExists) {
        anyImageRadioButtonExists.checked = true;
        selectedImage = anyImageRadioButtonExists.parentElement.parentElement.children[1].firstChild.src;
    }

    return {
        data: {
            title: prodTitleField.value,
            description: prodDescField.value,
            price: prodPriceField.value,
            stock: prodStockField.value,
            productnumber: prodNumberField.value,
            image_url: selectedImage,
            isProductionStopped: prodIsStoppedField.checked,
            featured: prodIsFeaturedField.checked,
        },
    };
}
