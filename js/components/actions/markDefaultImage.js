export default function markDefaultImage(img) {
    const allThumbs = document.querySelectorAll(".editimages img");
    //allThumbs.forEach((img) => {});
    for (let i = 0; i < allThumbs.length; i++) {
        //console.log(allThumbs[i].src);
        if (allThumbs[i].src === img) {
            allThumbs[i].parentElement.previousElementSibling.firstChild.checked = true;
            return;
        }
    }
}
