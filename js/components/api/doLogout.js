//clean variables
//reset menus.

import toggleUserFeatures from "../ui/toggleUserFeatures.js";
import { storeUserIsAdmin, storeUserIsBlocked, storeUserIsLoggedIn, storeUserToken } from "../variables.js";

export default function doLogOut() {
    localStorage.removeItem(storeUserIsAdmin);
    localStorage.removeItem(storeUserIsBlocked);
    localStorage.setItem(storeUserIsLoggedIn, "false");
    localStorage.removeItem(storeUserToken);
    // localStorage.removeItem()
    console.log("Logging out...ready to toggle off admin features now...");
    toggleUserFeatures();
}
