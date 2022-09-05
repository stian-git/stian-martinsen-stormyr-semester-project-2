// check if a token is valid by running a test and validating the result.
import { baseUrl } from "../variables.js";

export default async function isTokenValid(token) {
    const url = baseUrl + "api/users/me";
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
        if (response.ok) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.log("Error occured: " + error);
    }
}
