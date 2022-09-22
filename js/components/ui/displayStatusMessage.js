import { statusContainer, statusMessage } from "../variables.js";

export default function displayStatusMessage(message, statusClass = "error") {
    statusMessage.innerHTML = message;
    statusContainer.classList.add(statusClass);
    statusContainer.classList.add("active");
    // use statusClass error or success on the statusContainer to trigger the color selection.
    // add the text message to the statusfield.
    // add the class "active" at the end to trigger the message.
    // use a timeout to reset the active class and also the statusclass.
    // maybe set the timeout in a variable?
    setTimeout(() => {
        statusContainer.classList.remove(statusClass);
        statusContainer.classList.remove("active");
    }, 4000);
}
