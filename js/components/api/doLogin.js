import { baseUrl, loginButton, loginCancelButton, loginStatusMessage, passwordField, storeUserToken, usernameField } from "../variables.js";
import getUserInfo from "../api/getUserInfo.js";
import doLogOut from "./doLogout.js";
import toggleUserFeatues from "../ui/toggleUserFeatures.js";

export default async function doLogin(username, password) {
    //const usernameField = document.querySelector("#loginModal #username");
    // const passwordField = document.querySelector("#loginModal #password");
    //const loginStatusMessage = document.querySelector(".modal-error");

    //loginStatusMessage.style.display = "none";
    loginCancelButton.disabled = true;
    loginButton.disabled = true;
    //const loginModal = document.querySelector("#loginModal");
    loginButton.innerHTML = `
    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Logging in...`;
    username = usernameField.value;
    password = passwordField.value;
    //console.log("Logging in: " + username + " with: " + password);
    const url = baseUrl + "api/auth/local";
    const data = JSON.stringify({ identifier: username, password: password });
    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
        },
    };
    try {
        const response = await fetch(url, options);
        const json = await response.json();
        //console.log(json);
        if (response.ok) {
            localStorage.setItem(storeUserToken, json.jwt);
            getUserInfo(json.jwt).then(() => toggleUserFeatues());
            // remove login modal by clicking the cancel button after actual login.
            loginCancelButton.disabled = false;
            document.querySelector(".logincancel").click();
        } else {
            if (response.status === 400) {
                console.log("Login failed.");
            }
            // displayStatus("error", `Login failed. Please try again. (Status: ${response.status})`);
            //console.log("Error logging in. Please try again.");
            loginStatusMessage.style.display = "block";
            doLogOut();
        }
    } catch (error) {
        // displayStatus("error", `Login failed. Please try again.`);
        //console.log("Error occured: " + error);
        loginStatusMessage.style.display = "block";
        //loginButton.innerHTML = "Login";
        doLogOut();
    } finally {
        loginButton.innerHTML = "Login";
        loginCancelButton.disabled = false;
        loginButton.disabled = false;
    }
}
