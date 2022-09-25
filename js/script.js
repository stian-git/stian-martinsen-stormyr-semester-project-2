import { loginButton, logoutButton, searchButton, searchField, loginStatusMessage, loginCancelButton, loginForm } from "./components/variables.js";

import doLogin from "./components/api/doLogin.js";
import toggleUserFeatures from "./components/ui/toggleUserFeatures.js";
import doLogOut from "./components/api/doLogout.js";
import searchProducts from "./components/api/searchProducts.js";
import saveSearchResult from "./components/actions/saveSearchResult.js";
import addFooter from "./components/ui/addFooter.js";
import getNumberOfItemsInCart from "./components/ui/getNumberOfItemsInCart.js";
import displayStatusMessage from "./components/ui/displayStatusMessage.js";

// Search feature:

searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    searchProducts(searchField.value).then((arr) => {
        if (arr && arr.length > 0) {
            saveSearchResult(arr);
            window.location.href = "/products.html?search=true";
        } else {
            if (currentPage === "products.html") {
                const productListContainer = document.querySelector("#productlist");
                productListContainer.innerHTML = "No products matches your search string";
            }
            displayStatusMessage("Nothing matches your search. Please try again.", "error");
        }
    });
});

searchField.addEventListener("keyup", (e) => {
    if (e.target.value !== "") {
        // Enables the searchbutton on any value.
        searchButton.disabled = false;
    } else {
        searchButton.disabled = true;
    }
});

// add login and logout-features:
loginButton.addEventListener("click", doLogin);
logoutButton.addEventListener("click", doLogOut);

loginCancelButton.addEventListener("click", () => {
    loginStatusMessage.style.display = "none";
});

// Enable login when clicking enter...
loginForm.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        doLogin();
    }
});

// common actions

addFooter();
toggleUserFeatures();
getNumberOfItemsInCart();
