console.log("Script running!");
const modelId = "10305-1";

import getMinifigs from "./components/api/getMiniFigs.js";

let currentPage = document.location.pathname.replace("/", "");

if (currentPage == "") {
    currentPage = "index.html";
}

console.log(currentPage);

switch (currentPage) {
    case "productdetails.html":
        getMinifigs(modelId);
        break;
    case "products.html":
        // if this is products.html
        break;
    case "index.html":
        getMinifigs(modelId);
        break;
    default:
        break;
}

// popup test:

// const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
// const popoverList = [...popoverTriggerList].map((popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl));

const loginButton = document.querySelector(".loginbutton");
// loginButton.onclick((e) => {
//     console.log(e);
// });

loginButton.addEventListener("click", doLogin);
const usernameField = document.querySelector("#username");
const passwordField = document.querySelector("#password");

function doLogin() {
    console.log("Logging in " + usernameField.value + " with password: " + passwordField.value);
}
