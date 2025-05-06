import giveErrorMessage from "../utils/giveErrorMessage.js";
/**
 * Checks if the checkbox is checked
 * @param {Element} input
 * @returns
 */
export default function validateCheckox(input) {
    const parent = input.parentElement;
    parent.querySelectorAll(".info-error").forEach((el) => el.remove());
    let checkboxElement = document.querySelector(".checkbox2-label:nth-of-type(1) .checkbox-icon");
    if (!input.checked) {
        checkboxElement.style.background = "#fe142f";
        giveErrorMessage("Vous devez cocher cette case", parent);
        return false;
    } else {
        checkboxElement.style.background = "#279e7a";
        return true;
    }
}