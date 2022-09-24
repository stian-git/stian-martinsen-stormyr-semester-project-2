// import displayFeaturedProducts from "../components/actions/displayFeaturedProducts.js";
import displayFeaturedProducts from "../components/actions/displayFeaturedProducts.js";
import getHero from "../components/api/getHero.js";
import getProducts from "../components/api/getProducts.js";
// import getProducts from "../components/api/getProducts.js";

getHero();
getProducts(true).then((products) => {
    //console.log(products);
    displayFeaturedProducts(products);
});
// getProducts(true).then((arr) => {
//     displayFeaturedProducts(arr);
// });
