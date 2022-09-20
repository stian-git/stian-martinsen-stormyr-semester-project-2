import { placeHolderThumb, prodDescField, prodIsFeaturedField, prodIsStoppedField, prodNumberField, prodPriceField, prodStockField, prodTitleField } from "../variables.js";

export default function createProductObject() {
    console.log("Creating object..");
    //document.querySelector(".editimages input[type=radio]:checked")
    let selectedImage = placeHolderThumb;

    const anyImageRadioButtonExists = document.querySelector(".editimages input[type=radio]");
    const selectedImageRadioButtonExists = document.querySelector(".editimages input[type=radio]:checked");
    if (selectedImageRadioButtonExists) {
        selectedImage = selectedImageRadioButtonExists.parentElement.parentElement.children[1].firstChild.lastChild.src;
    } else if (anyImageRadioButtonExists) {
        console.log(anyImageRadioButtonExists);
        anyImageRadioButtonExists.checked = true;
        //selectedImage = anyImageRadioButtonExists.parentElement.parentElement.children[1].firstChild.lastChild.src;
        selectedImage = anyImageRadioButtonExists.parentElement.parentElement.children[1].firstChild.src;
    }

    console.log(selectedImage);
    //console.log(selectedImage);
    //console.log(selectedImage.id);
    //console.log(selectedImage.parentElement.parentElement.children[1].firstChild.lastChild.src);
    // if (!selectedImage) {
    //     console.log("Setting default image.");
    //     //Check if any radiobuttons are checkable, if it is we will check that one.
    //     // Otherwise: Use placeholderThumb;
    //     selectedImage = placeHolderThumb;
    // }

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
