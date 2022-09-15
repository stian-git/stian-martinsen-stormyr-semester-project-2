import { placeHolderImage, placeHolderThumb } from "../variables.js";

export default function displayMiniFigs(figdata) {
    const allFigs = figdata.results;
    //console.log(allFigs);
    const minifigsContainer = document.querySelector("#minifigures-tab-pane .card-group");
    // const numberOfFigs = allFigs.length;
    allFigs.forEach((figure) => {
        //console.log(figure.id);
        let figurethumbImage = placeHolderThumb;
        let figureImage = placeHolderImage;
        if (figure.set_img_url) {
            figurethumbImage = figure.set_img_url.replace("media/", "media/thumbs/") + "/140x140p.jpg";
            figureImage = figure.set_img_url;
        }

        const figureTitle = figure.set_name;
        //console.log(figurethumbImage);
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

// available fields:
// id: 26897,
// set_num: 'fig-012978',
// set_name: 'Castle Man, Reddish Brown Apron, Dark Brown Hair',
// quantity: 1,
// set_img_url: 'https://cdn.rebrickable.com/media/sets/fig-012978/107751.jpg'
