import { baseUrl, loginButton, loginCancelButton, loginStatusMessage, passwordField, storeUserToken, usernameField } from "../variables.js";
import getUserInfo from "../api/getUserInfo.js";
import doLogOut from "./doLogout.js";
import toggleUserFeatues from "../ui/toggleUserFeatures.js";

export default async function doLogin() {
    loginCancelButton.disabled = true;
    loginButton.disabled = true;
    loginButton.innerHTML = `
    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Logging in...`;
    const url = baseUrl + "api/auth/local";
    const data = JSON.stringify({ identifier: usernameField.value, password: passwordField.value });
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
        if (response.ok) {
            localStorage.setItem(storeUserToken, json.jwt);
            getUserInfo(json.jwt).then(() => toggleUserFeatues());
            // remove login modal by enabling and clicking the cancel button after actual login.
            loginCancelButton.disabled = false;
            //document.querySelector(".logincancel").click();
            loginCancelButton.click();
        } else {
            if (response.status === 400) {
                console.log("Login failed.");
            }
            loginStatusMessage.style.display = "block";
            doLogOut();
        }
    } catch (error) {
        loginStatusMessage.style.display = "block";
        doLogOut();
    } finally {
        loginButton.innerHTML = "Login";
        loginCancelButton.disabled = false;
        loginButton.disabled = false;
    }
}
