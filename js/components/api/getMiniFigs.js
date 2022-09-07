import displayMiniFigs from "../actions/displayMinifigs.js";
import { rebrickableApiKey } from "../variables.js";
import { rebrickableBaseUrl } from "../variables.js";
// API from rebrickable.com

//const rebrickableApiKey = "ca2870058d849c35e623b673de5478db";
//const rebrickableBaseUrl = "https://rebrickable.com/api/v3/lego/sets/";

export default async function getMinifigs(id) {
    const minifigsUrl = rebrickableBaseUrl + id + "-1/minifigs/?key=" + rebrickableApiKey;
    //console.log(minifigsUrl);
    try {
        const data = await fetch(minifigsUrl);
        const result = await data.json();
        //console.log(result);
        return result;
        //displayMiniFigs(result);
        // return result;
    } catch (error) {
        console.log("An error occured fetching minifigs:" + error);
        return [];
    }
}
