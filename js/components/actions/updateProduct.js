import addProduct from "../api/addProduct.js";
import saveChangedProduct from "../api/saveChangedProduct.js";
import { prodDescField, prodIsFeaturedField, prodIsStoppedField, prodNumberField, prodPriceField, prodStockField, prodTitleField } from "../variables.js";
import getSearchParam from "./getSearchParams.js";

export default function updateProduct() {
    //const prodNumberField = document.querySelector(".productform #productnumber");
    //const prodTitleField = document.querySelector(".productform #producttitle");
    //const prodDescField = document.querySelector(".productform #productdescription");
    //const prodPriceField = document.querySelector(".productform #productprice");
    //const prodStockField = document.querySelector(".productform #productstock");
    //const prodIsFeaturedField = document.querySelector(".productform #flexSwitchFeaturedProduct");
    //const prodIsStoppedField = document.querySelector(".productform #flexSwitchProductionStopped");

    //console.log(prodDesc.value);

    // const prodObj = JSON.stringify({
    //     data: {
    //         title: prodTitleField.value,
    //         description: prodDescField.value,
    //         price: prodPriceField.value,
    //         stock: prodStockField.value,
    //         productnumber: prodNumberField.value,
    //         image_url: "https://www.dagbladet.com",
    //         isProductionStopped: prodIsStoppedField.checked,
    //         featured: prodIsFeaturedField.checked,
    //     },
    // });

    let prodObj = {
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

    const editId = getSearchParam("id");
    console.log(editId);
    if (editId) {
        // we will edit.
        //console.log("We will edit this product now: " + editId);
        //console.log(document.querySelector(".editimages input:checked").parentElement.nextElementSibling.firstChild.src);
        prodObj.data.image_url = document.querySelector(".editimages input:checked").parentElement.nextElementSibling.firstChild.src;
        saveChangedProduct(prodObj, editId);
        // save fields + default image.
    } else {
        console.log("We will now add this product...");
        addProduct(prodObj);
        // handle images!
        // Upload without refId first? ...then add it when saving?
    }
}
