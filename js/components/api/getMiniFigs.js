import { rebrickableApiKey, rebrickableBaseUrl } from "../variables.js";

// API from rebrickable.com

export default async function getMinifigs(id) {
    const minifigsUrl = rebrickableBaseUrl + id + "-1/minifigs/?key=" + rebrickableApiKey;
    try {
        const data = await fetch(minifigsUrl);
        const result = await data.json();
        // Make sure we handle 0-content here or at the function caller)
        return result;
    } catch (error) {
        console.log("An error occured fetching minifigs:" + error);
        return [];
    }
}
