import { baseUrl, storeUserIsAdmin, storeUserIsLoggedIn, storeUserIsBlocked, userAdminGroupId, storeUserToken } from "../variables.js";
import doLogOut from "./doLogout.js";

// export default async function isUserAdmin(token) {
export default async function getUserInfo(token) {
    if (!token) {
        token = localStorage.getItem(storeUserToken);
    }
    // Only get userinfo if we already have a token.
    if (token) {
        const url = baseUrl + "api/users/me?populate=*";
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
                //console.log(json);
                localStorage.setItem(storeUserIsBlocked, json.blocked);
                localStorage.setItem(storeUserIsLoggedIn, true);
                //console.log(json.hasOwnProperty("role"));
                if (json.hasOwnProperty("role")) {
                    //console.log("Id exists");
                    const userRoleId = json.role.id;
                    if (json.role.id === userAdminGroupId) {
                        //console.log("User is admin");
                        localStorage.setItem(storeUserIsAdmin, true);
                    }
                }
                return true;
            } else {
                // Token is invalid. Logout user now.
                // doLogOut();
                // return false;
            }
        } catch (error) {
            //console.log("Error occured: " + error);
            doLogOut();
            return false;
        }
    } else {
        // doLogOut();
        // return false;
    }
}
