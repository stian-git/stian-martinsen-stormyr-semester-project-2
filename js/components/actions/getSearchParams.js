export default function getSearchParam(key) {
    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    const result = params.get(key);
    return result;
}
