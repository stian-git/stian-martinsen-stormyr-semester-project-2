import displayFeaturedProducts from "../components/actions/displayFeaturedProducts.js";
import displayProductDetails from "../components/actions/displayProductDetails.js";
import getProductDetails from "../components/api/getProductDetails.js";
import getProducts from "../components/api/getProducts.js";

getProductDetails().then((arr) => {
    displayProductDetails(arr);
});
getProducts(true).then((arr) => {
    displayFeaturedProducts(arr);
});
