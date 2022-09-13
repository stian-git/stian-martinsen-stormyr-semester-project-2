import { baseUrl, storeUserToken } from "../variables.js";

export default async function addImages() {
    // The below works for only one image at a time.
    // how do we iterate through a filelist?
    // maybe use a For-loop in the caller, so we only add one image at a time?
    const fileList = this.files;
    console.log(fileList);
    // fileList.forEach((element) => {
    //     console.log(element);
    // });
    console.log(fileList.length);
    console.log(fileList[0]);
    const apiToken = localStorage.getItem(storeUserToken);
    const url = baseUrl + "api/upload";
    const body = {
        files: fileList,
    };
    const formData = new FormData();
    // let fileArray;
    // fileList.forEach((element) => {
    //     fileArray.push(element);
    // });

    //formData.append("files", fileList[0]);

    const options = {
        method: "POST",
        headers: {
            Authorization: `Bearer ${apiToken}`,
        },
        body: formData,
    };

    try {
        const data = await fetch(url, options);
        //const data = await fetch(url, options)
        const result = await data.json();
        console.log(result);
    } catch (error) {
        console.log("An error occured adding images...");
    }
}
