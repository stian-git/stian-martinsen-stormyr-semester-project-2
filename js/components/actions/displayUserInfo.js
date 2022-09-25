import { defaultAuthenticatedUserGroupName, storeUserEmail, storeUserIsAdmin, storeUserName, userprofileContainer } from "../variables.js";

export default function displayUserInfo() {
    const username = localStorage.getItem(storeUserName);
    const useremail = localStorage.getItem(storeUserEmail);
    let userrole = defaultAuthenticatedUserGroupName;
    if (localStorage.getItem(storeUserIsAdmin)) {
        userrole = "Administrator";
    }
    userprofileContainer.innerHTML = `
    <table class="userprofile">
                <tbody>
                    <tr>
                        <th>Username</th>
                        <td class="userprofile__row-data">${username}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td class="userprofile__row-data">${useremail}</td>
                    </tr>
                    <tr>
                        <th>Role</th>
                        <td class="userprofile__row-data">${userrole}</td>
                    </tr>
                </tbody>
            </table>`;
}
