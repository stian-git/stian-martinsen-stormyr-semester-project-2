import { noCorsUrl } from "../variables.js";

export default async function isLinkOk(url) {
    try {
        const data = await fetch(noCorsUrl + url);
        if (data.status === 200) {
            return true;
        }
        if (!data.ok && data.status === 404) {
            // In rare occasions the dynamicly created urls will result in a URL that don`t exist and will result in a 404-error in the console.log (usually happens if the product number is not official),
            // these are hidden from the user as I`m unable to intercept with the logging of this error. User Experience is not interrupted as the failing links will not be visible.
            console.clear();
            return false;
        }
    } catch (error) {
        return false;
    }
}
