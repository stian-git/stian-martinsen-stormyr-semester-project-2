import { rebrickableApiKey, rebrickableBaseUrl } from "../variables.js";

// API from rebrickable.com

export default async function getMinifigs(id) {
    const minifigsUrl = rebrickableBaseUrl + id + "-1/minifigs/?key=" + rebrickableApiKey;
    try {
        const data = await fetch(minifigsUrl);
        const result = await data.json();
        return result;
    } catch (error) {
        return [];
        // caller is handling 0-results and errors.
    }
}
