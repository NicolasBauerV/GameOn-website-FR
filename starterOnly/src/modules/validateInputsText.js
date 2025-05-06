import giveErrorMessage from "../utils/giveErrorMessage.js";

/**
 * Function will valid text fields with restrictions.
 * @param {Element} input
 * @return {boolean}
 */
export default function validateTextInput(input) {
    const parent = input.parentElement;
    parent.querySelectorAll(".info-error").forEach((el) => el.remove());
    const errors = [];
    const val = input.value.trim();
    if (val.length < 2) errors.push("2 caractères au minimum");
    if (/[^\p{L}\s]/u.test(val))
        errors.push("Ne pas insérer des caractères spéciaux ou des chiffres");
    if (errors.length) {
        input.classList.remove("success");
        input.classList.add("error");
        errors.forEach((msg) => {
            giveErrorMessage(msg, parent);
        });
        return false;
    } else {
        input.classList.remove("error");
        input.classList.add("success");
        return true;
    }
}
