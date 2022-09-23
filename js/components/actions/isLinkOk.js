import { noCorsUrl } from "../variables.js";

export default async function isLinkOk(url) {
    try {
        const data = await fetch(noCorsUrl + url);
        if (data.status === 200) {
            // 200 is success for both Lego.com and rebrickable.com
            return true;
        }
        if (data.status === 404) {
            console.log("Link do not exist and will be hidden.");
        }

        // fetch(noCorsUrl + url).then((data) => {
        //     console.log(data2);
        // });
    } catch (error) {
        console.log("Link do not exist and will be hidden.");
        console.log(error);
        return false;
    }
}
