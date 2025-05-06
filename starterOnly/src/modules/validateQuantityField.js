import giveErrorMessage from "../utils/giveErrorMessage.js";
/**
 * 
 * @param {Element} input 
 * @returns 
 */
export default function validateQuantityField(input) {
    const parent = input.parentElement;
    parent.querySelectorAll(".info-error").forEach((el) => el.remove());
    input.value = input.value.replace(/[^0-9]/g, '');
    if (input.value.length < 1) {
        input.classList.remove("success");
        input.classList.add("error");
        giveErrorMessage("Vous devez saisir uniquement des chiffres", parent);
        return false;
    } else {
        input.classList.remove("error");
        input.classList.add("success");
        return true;
    }
}
