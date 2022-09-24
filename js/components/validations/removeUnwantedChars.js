import { charsToIgnoreInNumbers } from "../variables.js";

export default function removeUnwantedChars(e) {
    for (let i = 0; i < charsToIgnoreInNumbers.length; i++) {
        // Checks the currently typed key against a list of unwanted characters and avoids typing them.
        if (charsToIgnoreInNumbers[i] === e.key) {
            e.preventDefault();
            break;
        }
    }
}
