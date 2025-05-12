import giveErrorMessage from "../utils/giveErrorMessage.js";
/**
 * Checks if a radio button is checked
 * @param {NodeListOf<Element>} radioButtons 
 * @returns 
 */
export default function validateRadioInputs(radioButtons) {
    let isChecked = false;
    const parent = radioButtons[0].parentElement;
    parent.querySelectorAll(".info-error").forEach((el) => el.remove());
    const inputChecked = document.querySelector(`input[name="location"]:checked`) !== null;
    if (!inputChecked) {
        radioButtons[0].classList.remove("success");
        radioButtons[0].classList.add("error");
        giveErrorMessage("Vous devez selectionner une option", parent);
        return isChecked;
    } else {
        radioButtons[0].classList.remove("error");
        radioButtons[0].classList.add("success");
        isChecked = true;
        return isChecked;
    }
}