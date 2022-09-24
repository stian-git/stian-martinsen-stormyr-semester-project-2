import displayFeaturedProducts from "../components/actions/displayFeaturedProducts.js";
import getHero from "../components/api/getHero.js";
import getProducts from "../components/api/getProducts.js";

getHero();
getProducts(true).then((products) => {
    displayFeaturedProducts(products);
});
