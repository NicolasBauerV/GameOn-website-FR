import giveErrorMessage from "../utils/giveErrorMessage.js";
/**
 * This function will valid if an email is correctly written
 * @param {Element} input 
 * @returns {boolean}
 */
export default function validateEmailField(input) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const parent = input.parentElement;
    parent.querySelectorAll(".info-error").forEach((el) => el.remove());
    const val = input.value.trim();
    if (!emailRegex.test(val)) {
        input.classList.remove("success");
        input.classList.add("error");
        giveErrorMessage('Merci de saisir une adresse mail valide', parent);
        return false;
    } else {
        input.classList.remove("error");
        input.classList.add("success");
        return true;
    }
}