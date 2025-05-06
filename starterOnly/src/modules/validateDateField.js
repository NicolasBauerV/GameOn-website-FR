import giveErrorMessage from "../utils/giveErrorMessage.js";
/**
 * Checks if the user's date of birth cannot be later than today
 * @param {Element} input 
 * @param {Date} today 
 * @returns
 */
export default function validateDateField(input, today) {
    const parent = input.parentElement;
    parent.querySelectorAll(".info-error").forEach((el) => el.remove());
    const todayDate = new Date(today)
    const userDate = new Date(input.value);
    if (userDate > todayDate) {
        input.classList.remove("success");
        input.classList.add("error");
        giveErrorMessage(`Vous ne pouvez pas insérer une date ultérieur à aujourd'hui`, parent);
        return false;
    } else {
        input.classList.remove("error");
        input.classList.add("success");
        return true;
    }
}