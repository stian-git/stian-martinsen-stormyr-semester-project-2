import { storeSearchResult } from "../variables.js";

export default function getSearchResult() {
    const searchResult = JSON.parse(window.localStorage.getItem(storeSearchResult));
    if (!searchResult) {
        return [];
    } else {
        return searchResult;
    }
}
