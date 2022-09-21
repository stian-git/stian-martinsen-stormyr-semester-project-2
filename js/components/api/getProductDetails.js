//import getProductId from "../actions/getProductId.js";
import getSearchParam from "../actions/getSearchParams.js";
import { baseUrl } from "../variables.js";

export default async function getProductDetails(id) {
    //console.log(id);
    if (!id) {
        //console.log("Id is not defined...");
        //id = getProductId();
        id = getSearchParam("id");
        if (!id) {
            console.log("There are no id in querystring either");
            // forward user to products or "go back";
        }
    }
    //const prodId = getProductId();
    //console.log(id);
    const getProdUrl = baseUrl + "api/products/" + id + "?populate=*";
    //console.log(getProdUrl);

    try {
        const data = await fetch(getProdUrl);
        const result = await data.json();
        //console.log(result);
        return result.data.attributes;
    } catch (error) {
        console.log("An error occured: " + error);
    }
}
