import { noCorsUrl } from "../variables.js";

export default async function isLinkOk(url) {
    //const urlToCheck = legoProductBaseUrl + id;
    try {
        const data = await fetch(noCorsUrl + url);
        if (data.status === 200) {
            //console.log("Link is valid!");
            // 200 is success for Lego.com
            return true;
        }
        return false;
    } catch (error) {
        return false;
    }
}
