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
            window.location.href = "products.html?search=true";
        } else {
            if (currentPage === "products.html") {
                const productListContainer = document.querySelector("#productlist");
                productListContainer.innerHTML = "No products matches your search string";
            }
            // if there are no results to display...indicate it without forwarding the user?
        }
    });
});

const updateProductButton = document.querySelector(".productform button");

//const modelId = "10305-1";

//import getMinifigs from "./components/api/getMiniFigs.js";
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
        break;
    case "cart.html":
        displayCart();
        getTotalCartPrice();
        break;
    case "admin/edit.html":
        const idToEdit = getSearchParam("id");
        console.log(idToEdit);
        updateProductButton.addEventListener("click", (e) => {
            e.preventDefault();
            //console.log("click!");
            updateProduct(idToEdit);
        });
        if (idToEdit) {
            console.log("We will edit product id: " + idToEdit);
            getProductDetails(idToEdit).then((product) => {
                editProduct(product);
                markDefaultImage(product.image_url);
            });
            // change header
        } else {
            // We will add a new product.
            console.log("We will add a product");
        }

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

toggleUserFeatues();
