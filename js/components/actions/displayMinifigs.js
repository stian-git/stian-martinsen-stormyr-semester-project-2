export default function displayMiniFigs(figdata) {
    const allFigs = figdata.results;
    // const numberOfFigs = allFigs.length;
    allFigs.forEach((figure) => {
        console.log(figure.id);
        const figurethumbImage = figure.set_img_url.replace("media/", "media/thumbs/") + "/140x140p.jpg";
        const figureImage = figure.set_img_url;
        const figureTitle = figure.set_name;
        console.log(figurethumbImage);
        // gather the variables and display them.
    });
}

// available fields:
// id: 26897,
// set_num: 'fig-012978',
// set_name: 'Castle Man, Reddish Brown Apron, Dark Brown Hair',
// quantity: 1,
// set_img_url: 'https://cdn.rebrickable.com/media/sets/fig-012978/107751.jpg'
