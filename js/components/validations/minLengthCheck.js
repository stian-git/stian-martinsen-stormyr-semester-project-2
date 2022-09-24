export default function minLengthCheck(string, length) {
    console.log("Length: " + string.trim().length);
    if (string.trim().length >= length) {
        return true;
    } else {
        return false;
    }
}
