import { baseUrl, storeUserIsAdmin, storeUserIsLoggedIn, storeUserIsBlocked, userAdminGroupId } from "../variables.js";
import doLogOut from "./doLogout.js";

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
            console.log(json);

            // const userIsBlocked = json.blocked;
            localStorage.setItem(storeUserIsBlocked, json.blocked);
            // const userName = json.username;
            // const userIsLoggedIn = true;
            localStorage.setItem(storeUserIsLoggedIn, true);
            // console.log(json.role);
            console.log(json.hasOwnProperty("role"));
            if (json.hasOwnProperty("role")) {
                console.log("Id exists");
                const userRoleId = json.role.id;
                if (json.role.id === userAdminGroupId) {
                    console.log("User is admin");
                    localStorage.setItem(storeUserIsAdmin, true);
                }
            } else {
                // User is not an admin, but token valid.
            }
        } else {
            //return false;
            // Token is invalid. Logout user now.
            doLogOut();
        }
    } catch (error) {
        console.log("Error occured: " + error);
        doLogOut();
    }
}
