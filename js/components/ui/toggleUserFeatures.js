import { loginLink, loginMenu, loginMenuHeader, storeUserIsAdmin, storeUserIsLoggedIn } from "../variables.js";

export default async function toggleUserFeatures() {
    console.log("Running toggleUserFeatures");
    const userIsLoggedIn = localStorage.getItem(storeUserIsLoggedIn);
    const userIsAdmin = localStorage.getItem(storeUserIsAdmin);
    // console.log(userIsLoggedIn);
    const adminFeaturesSectionOnProductsPage = document.querySelectorAll("#productlist .card-footer");
    if (userIsLoggedIn === "true") {
        //console.log(userIsLoggedIn);
        //console.log(typeof userIsLoggedIn);
        loginMenu.style.display = "block";
        loginMenuHeader.innerHTML = "User";
        loginLink.style.display = "none";
        if (userIsAdmin === "true") {
            const adminMenuItems = document.querySelectorAll(".navbar .adminitem");
            adminMenuItems.forEach((element) => {
                element.style.display = "block";
            });
            // enable admintools.
            //console.log("Adding admin menu items")
            //console.log(window.location.pathname);
            switch (window.location.pathname) {
                case "/products.html":
                    //console.log(adminFeaturesSectionOnProductsPage[0]);
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
            default:
                break;
        }
    }
}
