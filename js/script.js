//console.log("Script running!");
const loginButton = document.querySelector(".loginbutton");
const logoutButton = document.querySelector(".logoutbutton");

// const usernameField = document.querySelector("#loginModal #username");
// const passwordField = document.querySelector("#loginModal #password");
const searchButton = document.querySelector(".searchform-button");

const searchField = document.querySelector(".searchform-field");

searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    searchProducts(searchField.value).then((arr) => {
        console.log(arr);
        if (arr.length > 0) {
            saveSearchResult(arr);
            window.location.href = "/products.html?search=true";
        } else {
            if (currentPage === "products.html") {
                const productListContainer = document.querySelector("#productlist");
                productListContainer.innerHTML = "No products matches your search string";
            }
            // if there are no results to display...indicate it without forwarding the user?
        }
    });
});

import doLogin from "./components/api/doLogin.js";

loginButton.addEventListener("click", doLogin);
logoutButton.addEventListener("click", doLogOut);
//import isTokenValid from "./components/validations/isTokenValid.js";
//import isUserAdmin from "./components/validations/isUserAdmin.js";
//import getUserInfo from "./components/api/getUserInfo.js";
import toggleUserFeatues from "./components/ui/toggleUserFeatures.js";
import doLogOut from "./components/api/doLogout.js";
import getHero from "./components/api/getHero.js";
import getProducts from "./components/api/getProducts.js";
import displayProducts from "./components/actions/displayProducts.js";
import displayFeaturedProducts from "./components/actions/displayFeaturedProducts.js";
import getProductDetails from "./components/api/getProductDetails.js";
import displayProductDetails from "./components/actions/displayProductDetails.js";
import searchProducts from "./components/api/searchProducts.js";
import getSearchParam from "./components/actions/getSearchParams.js";
import getSearchResult from "./components/actions/getSearchResult.js";
import saveSearchResult from "./components/actions/saveSearchResult.js";
import displayCart from "./components/actions/displayCart.js";
import getTotalCartPrice from "./components/ui/getTotalCartPrice.js";
import updateProduct from "./components/actions/updateProduct.js";
import editProduct from "./components/actions/editProduct.js";
import markDefaultImage from "./components/actions/markDefaultImage.js";
import addImages from "./components/ui/addImages.js";
import { saveProductButton, continueButton, header, imageFormContainer, imagesToAddButton, deleteProductButton, prodIdField } from "./components/variables.js";
import createProductObject from "./components/actions/createProductObject.js";
import addProduct from "./components/api/addProduct.js";
import deleteProduct from "./components/api/deleteProduct.js";
import getUserInfo from "./components/api/getUserInfo.js";
import requestProductToEdit from "./components/actions/requestProductToEdit.js";
import addFooter from "./components/ui/addFooter.js";
// import saveProductsToStorage from "./components/actions/saveProductsToStorage.js";
let currentPage = document.location.pathname.replace("/", "");

// getUserInfo("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjYyMzYzNTEzLCJleHAiOjE2NjQ5NTU1MTN9.xYWiYhoG9kzmawsh4bCqWghf7GEHBs6fSQGxpvecqqs").then((result) => {
//     // console.log(result);
// });

if (currentPage == "") {
    currentPage = "index.html";
}

//console.log(currentPage);

switch (currentPage) {
    case "productdetails.html":
        // getMinifigs(modelId);
        getProductDetails().then((arr) => {
            displayProductDetails(arr);
        });
        getProducts(true).then((arr) => {
            displayFeaturedProducts(arr);
        });
        break;
    case "cart.html":
        displayCart();
        getTotalCartPrice();
        break;
    case "admin/user.html":
        getUserInfo().then((isLoggedIn) => {
            if (!isLoggedIn) {
                history.back();
            }
        });
        break;
    case "admin/edit.html":
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
                        console.log("We will edit product id: " + idToEdit);
                        getProductDetails(idToEdit).then((product) => {
                            editProduct(product);
                            markDefaultImage(product.image_url);
                        });
                        imageFormContainer.style.display = "block";
                        deleteProductButton.style.display = "inline-block";
                    } else {
                        console.log("No product-id is provided...");
                        requestProductToEdit();
                    }
                    header.innerHTML = "Edit Product";
                    continueButton.style.display = "none";
                } else {
                    // We will add a new product.
                    console.log("We will add a product");
                    saveProductButton.style.display = "none";
                    continueButton.addEventListener("click", (e) => {
                        e.preventDefault();
                        let prodObj = createProductObject();
                        addProduct(prodObj);
                        deleteProductButton.style.display = "inline-block";
                    });
                }
            } else {
                console.log("User is not logged in...");
                history.back();
            }
        });

        break;
    case "products.html":
        const isSearchMode = getSearchParam("search");
        if (isSearchMode) {
            const searchResult = getSearchResult();
            console.log(searchResult);
            if (searchResult.length > 0) {
                displayProducts(searchResult);
                // indicate this is a search-result
            } else {
                console.log("There are no search results to display.");
                // const productListContainer = document.querySelector("#productlist");
                // productListContainer.innerHTML = "No products matches your search string";
                // Show error + load default after a while.?
            }
        } else {
            getProducts(false).then((arr) => {
                displayProducts(arr);
                // saveProductsToStorage(arr);
                //display products
            });
        }

        break;
    case "index.html":
        // getMinifigs(modelId);
        getHero();
        getProducts(true).then((arr) => {
            //console.log(arr);
            displayFeaturedProducts(arr);
            //display products
        });
        // doLogin("test", "Pass1234");
        break;
    default:
        break;
}

addFooter();
toggleUserFeatues();
