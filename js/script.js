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
