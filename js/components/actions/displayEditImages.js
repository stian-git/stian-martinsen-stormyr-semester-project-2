import { imageEditContainer, imageEditContainerTable } from "../variables.js";
import deleteImage from "./deleteImage.js";
import displayLargerThumb from "./displayLargerThumb.js";

export default function displayEditImages(id, thumb, img) {
    imageEditContainerTable.style.display = "table";
    imageEditContainer.innerHTML += `
                <tr data-imageid="${id}">
                    <td><input type="radio" name="defaultImage" id="${id}"></td>
                    <td><a href="#" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-html="true" data-bs-title="<img src=${img} class=enlargedthumb >"> <img src="${thumb}" data-largeimg="${img}" class="thumbnail"><a/></td>
                    <td><button class="btn btn-danger deleteimagebutton">X</button></td>
                </tr>`;
    const allImageDeleteButtons = document.querySelectorAll("button.deleteimagebutton");
    allImageDeleteButtons.forEach((element) => {
        element.addEventListener("click", deleteImage);
    });
    //const imageEditThumbs = document.querySelectorAll(".editimages img");
    // imageEditThumbs.forEach((thumb) => {
    //     thumb.onmouseover = () => {
    //         displayLargerThumb(thumb.dataset.largeimg);
    //     };
    // });
    const tooltipContainers = document.querySelectorAll(`[data-bs-toggle="tooltip"]`);
    tooltipContainers.forEach((item) => {
        new bootstrap.Tooltip(item);
    });
}
