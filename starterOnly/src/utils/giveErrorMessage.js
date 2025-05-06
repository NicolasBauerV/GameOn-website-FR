/**
 * Give an error message to user
 * @param {String} msg 
 * @param {HTMLElement} nodeElement 
 */
export default function giveErrorMessage(msg, nodeElement) {
    const span = document.createElement("span");
    span.className = "info-error";
    span.textContent = msg;
    nodeElement.appendChild(span);
}