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
import addImages from "../components/ui/addImages.js";
import { continueButton, deleteProductButton, header, imageFormContainer, imagesToAddButton, saveProductButton } from "../components/variables.js";

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
        }
    } else {
        // User is not logged in.
        history.back();
    }
});
