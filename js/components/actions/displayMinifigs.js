import { minifigsContainer, placeHolderImage, placeHolderThumb } from "../variables.js";

export default function displayMiniFigs(figdata) {
    const allFigs = figdata.results;
    minifigsContainer.innerHTML = "";
    allFigs.forEach((figure) => {
        let figurethumbImage = placeHolderThumb;
        let figureImage = placeHolderImage;
        if (figure.set_img_url) {
            figurethumbImage = figure.set_img_url.replace("media/", "media/thumbs/") + "/140x140p.jpg";
            figureImage = figure.set_img_url;
        }
        const figureTitle = figure.set_name;
        // gather the variables and display them.
        minifigsContainer.innerHTML += `
            <div class="card">
                <img src="${figurethumbImage}" class="card-img-top" alt="${figureTitle}" />
                <div class="card-body">
                    <h5 class="card-title">${figureTitle}</h5>
                </div>
            </div>`;
    });
}
