//clean variables
//reset menus.

import toggleUserFeatues from "../ui/toggleUserFeatures.js";
import { storeUserIsAdmin, storeUserIsBlocked, storeUserIsLoggedIn, storeUserToken } from "../variables.js";

export default function doLogOut() {
    localStorage.removeItem(storeUserIsAdmin);
    localStorage.removeItem(storeUserIsBlocked);
    localStorage.setItem(storeUserIsLoggedIn, "false");
    localStorage.removeItem(storeUserToken);
    // localStorage.removeItem()
    toggleUserFeatues();
}
