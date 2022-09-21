import { defaultAuthenticatedUserGroupName, storeUserEmail, storeUserIsAdmin, storeUserName } from "../variables.js";

export default function displayUserInfo() {
    const userprofileContainer = document.querySelector(".userprofilecontainer");
    const username = localStorage.getItem(storeUserName);
    const useremail = localStorage.getItem(storeUserEmail);
    //const userrole = localStorage.getItem(storeUserIsAdmin);

    //console.log(userrole);
    let userrole = defaultAuthenticatedUserGroupName;
    if (localStorage.getItem(storeUserIsAdmin)) {
        userrole = "Administrator";
    }

    userprofileContainer.innerHTML = `
    <table class="userprofile">
                <tbody>
                    <tr>
                        <th>Username</th>
                        <td>${username}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>${useremail}</td>
                    </tr>
                    <tr>
                        <th>Role</th>
                        <td>${userrole}</td>
                    </tr>
                </tbody>
            </table>`;
}