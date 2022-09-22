import displayUserInfo from "../components/actions/displayUserInfo.js";
import getUserInfo from "../components/api/getUserInfo.js";

getUserInfo().then((isLoggedIn) => {
    if (!isLoggedIn) {
        history.back();
    } else {
        displayUserInfo();
    }
});
