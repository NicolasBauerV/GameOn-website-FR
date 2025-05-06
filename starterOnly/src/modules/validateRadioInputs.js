import giveErrorMessage from "../utils/giveErrorMessage.js";
/**
 * Checks if a radio button is checked
 * @param {Element} input 
 * @returns 
 */
export default function validateRadioInputs(input) {
    let isChecked = false;
    const parent = input.parentElement;
    parent.querySelectorAll(".info-error").forEach((el) => el.remove());
    if (!input.checked) {
        input.classList.remove("success");
        input.classList.add("error");
        giveErrorMessage("Vous devez saisir uniquement des chiffres", parent);
        return isChecked;
    } else {
        input.classList.remove("error");
        input.classList.add("success");
        isChecked = true;
        return isChecked;
    }
}