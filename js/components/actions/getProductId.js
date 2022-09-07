export default function getProductId() {
    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    //const modelId = params.get("model");
    const id = params.get("id");
    //console.log(modelId);
    //console.log(id);
    return id;
}
