import { baseUrl } from "../variables.js";

export default async function isUserAdmin(token) {
    const url = baseUrl + "api/users/me?populate=*";
    // const data = JSON.stringify({ identifier: username, password: password });
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
    };
    try {
        const response = await fetch(url, options);
        const json = await response.json();
        // console.log(typeof json.role);
        if (response.ok) {
            // console.log(json.role.name);
            if (json.role.name === "Admin") {
                console.log("User is admin");
            }
            //console.log(json.role);
            //return true;
        } else {
            console.log("User is NOT admin");
            //return false;
        }
    } catch (error) {
        console.log("Error occured: " + error);
    }
}
