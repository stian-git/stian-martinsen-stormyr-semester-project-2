import { storeSearchResult } from "../variables.js";

export default function saveSearchResult(arr) {
    console.log(arr);
    const stringifiedArr = JSON.stringify(arr);
    window.localStorage.setItem(storeSearchResult, stringifiedArr);
}
