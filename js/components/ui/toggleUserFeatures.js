import { storeUserIsAdmin, storeUserIsLoggedIn } from "../variables.js";

export default function toggleUserFeatues() {
    const userIsLoggedIn = localStorage.getItem(storeUserIsLoggedIn);
    const userIsAdmin = localStorage.getItem(storeUserIsAdmin);
    // console.log(userIsLoggedIn);
    const loginMenu = document.querySelector("nav .login-menu");
    const loginMenuHeader = document.querySelector("nav .login-menu .dropdown-toggle");
    const loginLink = document.querySelector(".login-link");
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
            //console.log("Adding admin menu items");
        }
    } else {
        loginMenu.style.display = "none";
        loginLink.style.display = "block";
    }
}
