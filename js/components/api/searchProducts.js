// /api/products?filters[$or][0][title][$containsi]=hideout&filters[$or][1][description][$containsi]=47&populate=*

import { baseUrl } from "../variables.js";

export default async function searchProducts(str) {
    const searchUrl = baseUrl + "api/products?filters[$or][0][title][$containsi]=" + str + "&filters[$or][1][description][$containsi]=" + str + "&populate=*";
    console.log("Searching for: " + str);
    console.log(searchUrl);

    // /api/products?filters[$or][0][title][$containsi]=hideout&filters[$or][1][description][$containsi]=47&populate=*
    try {
        const data = await fetch(searchUrl);
        const result = await data.json();
        //console.log(result.data);
        //console.log(typeof result.data);
        return result.data;
    } catch (error) {
        console.log("Error occured searching...");
        //add error message.
    }
}
