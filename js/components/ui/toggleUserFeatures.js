import { adminMenuItems, loginLink, loginMenu, loginMenuHeader, storeUserIsAdmin, storeUserIsLoggedIn } from "../variables.js";

export default async function toggleUserFeatures() {
    const userIsLoggedIn = localStorage.getItem(storeUserIsLoggedIn);
    const userIsAdmin = localStorage.getItem(storeUserIsAdmin);
    const adminFeaturesSectionOnProductsPage = document.querySelectorAll("#productlist .card-footer");
    if (userIsLoggedIn === "true") {
        loginMenu.style.display = "block";
        loginMenuHeader.innerHTML = "User";
        loginLink.style.display = "none";
        if (userIsAdmin === "true") {
            //const adminMenuItems = document.querySelectorAll(".navbar .adminitem");
            adminMenuItems.forEach((element) => {
                element.style.display = "block";
            });
            switch (window.location.pathname) {
                // used switch to easily add handling of other pages in the future.
                case "/products.html":
                    adminFeaturesSectionOnProductsPage.forEach((element) => {
                        element.style.display = "flex";
                    });
                    break;
                default:
                    break;
            }
        }
    } else {
        loginMenu.style.display = "none";
        loginLink.style.display = "block";
        switch (window.location.pathname) {
            case "/products.html":
                adminFeaturesSectionOnProductsPage.forEach((element) => {
                    element.style.display = "none";
                });
                break;
            // handle edit.html and user.html the same way:
            case "/admin/edit.html":
            case "/admin/user.html":
                window.location.href = "/";
                break;
            default:
                break;
        }
    }
}
