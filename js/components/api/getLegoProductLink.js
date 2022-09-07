// import { noCorsUrl, legoProductBaseUrl } from "../variables.js";

// export default async function getLegoProductLink(id) {
//     const urlToCheck = legoProductBaseUrl + id;
//     //const legoProductBaseUrl = "https://www.lego.com/en-gb/product/" + id;
//     //const noCorsUrl = "https://noroffcors.herokuapp.com/";
//     //console.log(legoProductBaseUrl);
//     try {
//         const data = await fetch(noCorsUrl + urlToCheck);
//         if (data.status === 200) {
//             //console.log("Link is valid!");
//             return true;
//         }
//         return false;
//         //console.log(data);
//         //const result = await data.json();
//         //console.log(result);
//     } catch (error) {
//         //console.log("We will not display any official Lego-link");
//         return false;
//     }
// }
