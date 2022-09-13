import { baseUrl, storeUserToken } from "../variables.js";

export default async function saveChangedProduct(prodObj, id) {
    console.log("We will now update the product with all changes...");
    const url = baseUrl + "api/products/" + id;
    //console.log(url);
    const apiToken = localStorage.getItem(storeUserToken);
    const options = {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${apiToken}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(prodObj),
    };

    try {
        const data = await fetch(url, options);
        const result = await data.json();
        console.log(result);
    } catch (error) {
        console.log("An error occured updating the product with id " + id);
    }
    // const options = {
    //     method: "POST",
    //     body: data,
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    // };
    //localStorage.setItem(storeUserToken, json.jwt);
}
