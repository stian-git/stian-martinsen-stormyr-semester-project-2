export default function getSearchParam(key) {
    //console.log(key);
    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    //const modelId = params.get("model");
    const result = params.get(key);
    return result;
}
