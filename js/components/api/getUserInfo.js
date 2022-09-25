import displayStatusMessage from "../ui/displayStatusMessage.js";
import { baseUrl, storeUserIsAdmin, storeUserIsLoggedIn, storeUserIsBlocked, userAdminGroupId, storeUserToken, storeUserEmail, storeUserName } from "../variables.js";
import doLogOut from "./doLogout.js";

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
            if (response.ok) {
                const json = await response.json();
                localStorage.setItem(storeUserIsBlocked, json.blocked);
                localStorage.setItem(storeUserIsLoggedIn, true);
                localStorage.setItem(storeUserEmail, json.email);
                localStorage.setItem(storeUserName, json.username);
                if (json.hasOwnProperty("role")) {
                    if (json.role.id === userAdminGroupId) {
                        localStorage.setItem(storeUserIsAdmin, true);
                    }
                }
                return true;
            } else {
                throw "Error getting userinfo";
            }
        } catch (error) {
            displayStatusMessage("Unable to get userinfo. Please try again.", "error");
            doLogOut();
            return false;
        }
    } else {
        displayStatusMessage("Unable to get userinfo. Please try again.", "error");
        doLogOut();
        return false;
    }
}
