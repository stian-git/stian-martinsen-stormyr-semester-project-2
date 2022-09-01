const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const modelId = params.get("id");

console.log(modelId);
