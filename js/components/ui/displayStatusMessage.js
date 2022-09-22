import { statusContainer, statusMessage } from "../variables.js";

export default function displayStatusMessage(message, statusClass = "error") {
    let statusBemClass = "statuscontainer__status-error";
    if (statusClass === "success") {
        statusBemClass = "statuscontainer__status-success";
    }
    console.log(statusBemClass);
    statusMessage.innerHTML = message;
    statusContainer.classList.add(statusBemClass);
    statusContainer.classList.add("statuscontainer__status-active");
    // use statusClass error or success on the statusContainer to trigger the color selection.
    // add the text message to the statusfield.
    // add the class "active" at the end to trigger the message.
    // use a timeout to reset the active class and also the statusclass.
    // maybe set the timeout in a variable?
    setTimeout(() => {
        statusContainer.classList.remove(statusBemClass);
        statusContainer.classList.remove("statuscontainer__status-active");
    }, 5000);
}
