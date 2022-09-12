import addProduct from "../api/addProduct.js";

export default function updateProduct() {
    const prodNumberField = document.querySelector(".productform #productnumber");
    const prodTitleField = document.querySelector(".productform #producttitle");
    const prodDescField = document.querySelector(".productform #productdescription");
    const prodPriceField = document.querySelector(".productform #productprice");
    const prodStockField = document.querySelector(".productform #productstock");
    const prodIsFeaturedField = document.querySelector(".productform #flexSwitchFeaturedProduct");
    const prodIsStoppedField = document.querySelector(".productform #flexSwitchProductionStopped");
    //console.log(prodDesc.value);

    const prodObj = JSON.stringify({
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
    });
    //console.log(prodIsFeaturedField.checked);
    //console.log(prodIsStoppedField.checked);
    addProduct(prodObj);
}
