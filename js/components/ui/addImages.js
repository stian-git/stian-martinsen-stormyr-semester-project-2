import { baseUrl, storeUserToken } from "../variables.js";

export default async function addImages() {
    const fileList = this.files;
    console.log(fileList[0]);
    console.log(fileList[0].name);

    const apiToken = localStorage.getItem(storeUserToken);
    const url = baseUrl + "api/upload";
    const formData = new FormData();
    for (let i = 0; i < fileList.length; i++) {
        formData.append("files", fileList[i]);
        document.querySelector(".main_image").innerHTML += `<img src="${fileList[i].name}">`;
    }
    const options = {
        method: "POST",
        headers: {
            Authorization: `Bearer ${apiToken}`,
        },
        body: formData,
    };

    // try {
    //     const data = await fetch(url, options);
    //     const result = await data.json();
    //     console.log(result);
    //     // Present successful adding.
    //     // Keep track of ID`s to add them to new products?

    // } catch (error) {
    //     console.log("An error occured adding images...");

    // }
}
