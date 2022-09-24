import { imageEditContainer, imageEditContainerTable } from "../variables.js";
import deleteImage from "./deleteImage.js";

export default function displayEditImages(id, thumb, img) {
    imageEditContainerTable.style.display = "table";
    imageEditContainer.innerHTML += `
                <tr data-imageid="${id}">
                    <td><input type="radio" name="defaultImage" id="${id}" class="editimages__table-radiobutton"></td>
                    <td><img src="${thumb}" aria-label="Thumb-image of product with ID: ${id}" title="Thumbnail of product ID: ${id}" alt="Thumbnail of product: ${id}" data-largeimg="${img}" class="thumbnail editimages__table-thumb" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-html="true" data-bs-title="<img src=${img} class=tooltip-inner-enlargedthumb aria-label='Thumb-image of product with ID: ${id}' title='Thumbnail of product ID: ${id}' alt='Thumbnail of product: ${id}'>"></td>
                    <td><button class="btn btn-danger deleteimagebutton editimages__table-deletebutton">X</button></td>
                </tr>`;
    const allImageDeleteButtons = document.querySelectorAll("button.deleteimagebutton");
    allImageDeleteButtons.forEach((element) => {
        element.addEventListener("click", deleteImage);
    });
    const tooltipContainers = document.querySelectorAll(`[data-bs-toggle="tooltip"]`);
    tooltipContainers.forEach((item) => {
        new bootstrap.Tooltip(item);
    });
}
