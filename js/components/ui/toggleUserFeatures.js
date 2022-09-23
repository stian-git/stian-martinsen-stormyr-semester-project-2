import { adminMenuItems, editProductButton, loginLink, loginMenu, loginMenuHeader, storeUserIsAdmin, storeUserIsLoggedIn } from "../variables.js";

export default async function toggleUserFeatures() {
    //console.log("Toggling user features now...");
    //console.log(window.location.pathname);
    const userIsLoggedIn = localStorage.getItem(storeUserIsLoggedIn);
    const userIsAdmin = localStorage.getItem(storeUserIsAdmin);
    const adminFeaturesSectionOnProductsPage = document.querySelectorAll("#productlist .card-footer");
    if (userIsLoggedIn === "true") {
        loginMenu.style.display = "block";
        loginMenuHeader.innerHTML = "User";
        loginLink.style.display = "none";
        if (userIsAdmin === "true") {
            //const adminMenuItems = document.querySelectorAll(".navbar .adminitem mainmenu__adminmenu-link");
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
                case "/productdetails.html":
                    //console.log("Show editbutton now...");
                    //console.log(editProductButton);
                    editProductButton.style.display = "block";
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
            case "/productdetails.html":
                //console.log("Show editbutton now...");
                //console.log(editProductButton);
                editProductButton.style.display = "none";
                break;
            default:
                break;
        }
    }
}
