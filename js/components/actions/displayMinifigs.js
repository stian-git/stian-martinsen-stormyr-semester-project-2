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
            <div class="card minifig__card">
                <img src="${figurethumbImage}" class="card-img-top minifig__card-img" aria-label="Image of ${figureTitle}" title="Image of ${figureTitle}" alt="Image of ${figureTitle}" />
                <div class="card-body minifig__card-body">
                    <h5 class="card-title minifig__card-title">${figureTitle}</h5>
                </div>
            </div>`;
    });
}
