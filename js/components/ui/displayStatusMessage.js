import { statusContainer, statusMessage } from "../variables.js";

export default function displayStatusMessage(message, statusClass = "error") {
    let statusBemClass = "statuscontainer__status-error";
    if (statusClass === "success") {
        statusBemClass = "statuscontainer__status-success";
    }
    statusMessage.innerHTML = message;
    statusContainer.classList.add(statusBemClass);
    statusContainer.classList.add("statuscontainer__status-active");
    setTimeout(() => {
        statusContainer.classList.remove(statusBemClass);
        statusContainer.classList.remove("statuscontainer__status-active");
    }, 5000);
    statusContainer.addEventListener("click", () => {
        statusContainer.classList.remove("statuscontainer__status-active");
    });
}
