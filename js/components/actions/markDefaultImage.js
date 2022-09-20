export default function markDefaultImage(img) {
    const allThumbs = document.querySelectorAll(".editimages img");
    for (let i = 0; i < allThumbs.length; i++) {
        if (allThumbs[i].src === img) {
            allThumbs[i].parentElement.parentElement.firstElementChild.firstChild.checked = true;
            return;
        }
    }
}
