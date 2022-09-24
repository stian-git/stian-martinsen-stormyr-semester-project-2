import createProductObject from "../components/actions/createProductObject.js";
import editProduct from "../components/actions/editProduct.js";
import getSearchParam from "../components/actions/getSearchParams.js";
import markDefaultImage from "../components/actions/markDefaultImage.js";
import requestProductToEdit from "../components/actions/requestProductToEdit.js";
import updateProduct from "../components/actions/updateProduct.js";
import addProduct from "../components/api/addProduct.js";
import deleteProduct from "../components/api/deleteProduct.js";
import getProductDetails from "../components/api/getProductDetails.js";
import getUserInfo from "../components/api/getUserInfo.js";
import addImages from "../components/api/addImages.js";
import {
    continueButton,
    deleteProductButton,
    header,
    imageFormContainer,
    imagesToAddButton,
    minLengthProdNumber,
    minLengthProdTitle,
    prodIdField,
    prodNumberField,
    prodNumberRequirementLabel,
    prodPriceField,
    prodPriceRequirementLabel,
    prodStockField,
    prodStockRequirementLabel,
    prodTitleField,
    prodTitleRequirementLabel,
    productForm,
    saveProductButton,
} from "../components/variables.js";
import productFormValidation from "../components/validations/productFormValidation.js";
import removeUnwantedChars from "../components/validations/removeUnwantedChars.js";

getUserInfo().then((isLoggedIn) => {
    if (isLoggedIn) {
        const idToEdit = getSearchParam("id");
        saveProductButton.addEventListener("click", (e) => {
            e.preventDefault();
            updateProduct();
        });

        deleteProductButton.addEventListener("click", (e) => {
            e.preventDefault();
            deleteProduct(prodIdField.value);
        });

        imagesToAddButton.addEventListener("change", addImages, false);

        if (idToEdit) {
            if (idToEdit !== "search") {
                // editing a specific product with provided id
                getProductDetails(idToEdit).then((product) => {
                    editProduct(product);
                    markDefaultImage(product.image_url);
                });
                imageFormContainer.style.display = "block";
                deleteProductButton.style.display = "inline-block";
            } else {
                // id is not provided. We will request the user to select.
                requestProductToEdit();
            }
            header.innerHTML = "Edit Product";
            continueButton.style.display = "none";
        } else {
            // We will add a new product.
            saveProductButton.style.display = "none";
            continueButton.addEventListener("click", (e) => {
                e.preventDefault();
                continueButton.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Saving product...`;
                continueButton.disabled = true;
                let prodObj = createProductObject();
                addProduct(prodObj);
            });
            continueButton.disabled = true;
        }
        // Validate form here?
        prodPriceField.addEventListener("keyup", (e) => {
            if (e.key !== "Tab") {
                if (prodPriceField.value && prodPriceField.value >= 0) {
                    prodPriceRequirementLabel.style.display = "none";
                } else {
                    prodPriceRequirementLabel.style.display = "block";
                }
            }
        });

        prodStockField.addEventListener("keyup", (e) => {
            if (e.key !== "Tab") {
                if (prodStockField.value && prodStockField.value >= 0) {
                    prodStockRequirementLabel.style.display = "none";
                } else {
                    prodStockRequirementLabel.style.display = "block";
                }
            }
        });

        prodNumberField.addEventListener("keyup", (e) => {
            if (e.key !== "Tab") {
                const lengthCheck = parseInt(prodNumberField.value.length) - minLengthProdNumber;
                prodNumberRequirementLabel.innerHTML = `Product number requires atleast ${Math.abs(lengthCheck)} more numbers or letters.`;
                if (lengthCheck >= 0) {
                    prodNumberRequirementLabel.style.display = "none";
                } else {
                    prodNumberRequirementLabel.style.display = "block";
                }
            }
        });
        prodTitleField.addEventListener("keyup", (e) => {
            if (e.key !== "Tab") {
                const lengthCheck = parseInt(prodTitleField.value.length) - minLengthProdTitle;
                prodTitleRequirementLabel.innerHTML = `Procuct name requires atleast ${Math.abs(lengthCheck)} more numbers or letters.`;
                if (lengthCheck >= 0) {
                    prodTitleRequirementLabel.style.display = "none";
                } else {
                    prodTitleRequirementLabel.style.display = "block";
                }
            }
        });

        prodStockField.addEventListener("keydown", (e) => {
            removeUnwantedChars(e);
        });
        prodPriceField.addEventListener("keydown", (e) => {
            removeUnwantedChars(e);
        });
        productForm.addEventListener("keyup", (e) => {
            const dataIsValid = productFormValidation(e);
            if (dataIsValid) {
                continueButton.disabled = false;
            } else {
                continueButton.disabled = true;
            }
        });
    } else {
        // User is not logged in.
        history.back();
    }
});
