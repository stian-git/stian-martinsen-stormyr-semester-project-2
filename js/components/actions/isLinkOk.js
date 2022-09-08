import { noCorsUrl } from "../variables.js";

export default async function isLinkOk(url) {
    try {
        const data = await fetch(noCorsUrl + url);
        if (data.status === 200) {
            // 200 is success for both Lego.com and rebrickable.com
            return true;
        }
        return false;
    } catch (error) {
        return false;
    }
}
