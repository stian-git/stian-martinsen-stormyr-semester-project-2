import { imageEditContainer, imageEditContainerTable } from "../variables.js";
import deleteImage from "./deleteImage.js";

export default function displayEditImages(id, thumb, img) {
    imageEditContainerTable.style.display = "table";
    imageEditContainer.innerHTML += `
                <tr data-imageid="${id}">
                    <td><input type="radio" name="defaultImage" id="${id}"></td>
                    <td><img src="${thumb}" data-largeimg="${img}" class="thumbnail"></td>
                    <td><button class="btn btn-danger deleteimagebutton">X</button></td>
                </tr>`;
    const allImageDeleteButtons = document.querySelectorAll("button.deleteimagebutton");
    allImageDeleteButtons.forEach((element) => {
        element.addEventListener("click", deleteImage);
    });
}
