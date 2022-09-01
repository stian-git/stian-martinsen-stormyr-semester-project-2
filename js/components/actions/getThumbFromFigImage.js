const imageurl = "https://cdn.rebrickable.com/media/sets/fig-012977/107283.jpg";

// turn to: https://cdn.rebrickable.com/media/thumbs/sets/fig-012977/107283.jpg/140x140p.jpg

const newUrl = imageurl.replace("media/", "media/thumbs/") + "/140x140p.jpg";
console.log(imageurl);
console.log(newUrl);
