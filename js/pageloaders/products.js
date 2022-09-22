import displayProducts from "../components/actions/displayProducts.js";
import getSearchParam from "../components/actions/getSearchParams.js";
import getSearchResult from "../components/actions/getSearchResult.js";
import getProducts from "../components/api/getProducts.js";

const isSearchMode = getSearchParam("search");
if (isSearchMode) {
    const searchResult = getSearchResult();
    if (searchResult.length > 0) {
        displayProducts(searchResult);
        // indicate this is a search-result
    }
    // else {
    //     console.log("There are no search results to display.");
    //     // Show error + load default after a while.?
    // }
} else {
    getProducts(false).then((arr) => {
        displayProducts(arr);
    });
}
