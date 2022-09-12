import { baseUrl } from "../variables.js";

export default async function addProduct(prodObj) {
    const addProductUrl = baseUrl + "api/products";
    const apiToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjYyOTYyNjk5LCJleHAiOjE2NjU1NTQ2OTl9.imsBfAoVMhVEhBjsw2V3iBMMO7anweekVazf-CRzNyU";

    // prodObj = JSON.stringify({
    //     data: {
    //         title: "Test Product 2",
    //         description: "This is a test product.",
    //         price: 666,
    //         stock: 666,
    //         productnumber: "66666",
    //         image_url: "https://www.google.com",
    //         isProductionStopped: true,
    //         featured: false,
    //     },
    // });

    const options = {
        method: "POST",
        body: prodObj,
        headers: {
            Authorization: `Bearer ${apiToken}`,
            "Content-Type": "application/json",
        },
    };

    try {
        const data = await fetch(addProductUrl, options);
        const json = await data.json();
        console.log(json);
    } catch (error) {
        console.log("Error occured adding product: " + error);
    }
}
