// import getLegoProductLink from "../api/getLegoProductLink.js";
import getMinifigs from "../api/getMiniFigs.js";
import { legoProductBaseUrl } from "../variables.js";
import displayMiniFigs from "./displayMinifigs.js";
import isLinkOk from "./isLinkOk.js";

export default function displayProductDetails(arr) {
    console.log(arr);
    // const prodTitle = result.data.attributes.title;
    //     const prodPrice = result.data.attributes.price;
    //     const prodNumber = result.data.attributes.prodNumber;
    //const prodDesc = arr.description;
    //console.log(prodDesc);
    //const prodStopped = arr.isProductionStopped;
    //     const prodStock = result.data.attributes.stock;
    //     const prodImageArr = result.data.attributes.image.data;
    //     console.log(prodTitle);
    //     console.log(prodImageArr);

    const detailsTab = document.querySelector("#details-tab-pane");
    detailsTab.innerText = arr.description;
    detailsTab.innerText += "\nStock: " + arr.stock;
    //console.log(typeof prodStopped);
    if (arr.isProductionStopped) {
        detailsTab.innerText += "\nProductionstatus: Stopped.";
    }
    // make Lego-link:
    const legoProductLink = legoProductBaseUrl + arr.productnumber;
    //console.log(legoProductLink);
    const isLegoLinkOkey = isLinkOk(legoProductLink);
    const linkTab = document.querySelector("#links-tab-pane");
    if (isLegoLinkOkey) {
        //console.log("Link should be displayed.");
        linkTab.innerHTML += `<p>Lego Official (Product): <a href="${legoProductLink}" target="blank">${legoProductLink}</a></p>`;
    }

    // make Rebrickable-link:
    //const rebrickableLink = rebrickableBaseUrl
    getMinifigs(arr.productnumber).then((arr) => {
        console.log(arr);
        if (arr.length > 0) {
            displayMiniFigs(arr);
        }
    });
}
