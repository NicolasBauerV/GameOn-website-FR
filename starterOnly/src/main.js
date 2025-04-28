import onToggleNavbar from "./modules/navbar.js";
import OpenCloseModal from "./modules/modal.js";

onToggleNavbar();
OpenCloseModal();

// DOM Elements
const form = document.querySelector("form");

const formData = new FormData(form);

const inputsText = document.querySelectorAll(`input[type="text"]`);

/**
 * Give an error message to user if the field is not correct
 * 
 * @param {string} message Message to user
 * @param {Element} input The input to call his parent container
 */
function giveErrorMessage(message, input) {
    const textIndication = document.createElement("span");
    input.parentElement.classList.toggle("error");
    textIndication.classList = "info-error";
    textIndication.innerHTML = message;
    input.parentElement.appendChild(textIndication);
}

inputsText.forEach(inputElement => {
    inputElement.addEventListener("change", () => {
        // add listener to field texts
    });
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (inputsText[0].value.length < 2) {
        giveErrorMessage("2 caractères au minimum", inputsText[0]);
    }
    inputsText.forEach((input) => {
        console.log(input);
        if (input.value !== "" && input.value.match(/^[\p{L}\s]+$/u) !== null) {
            input.parentElement.classList.toggle("success");
        } else {
            giveErrorMessage("Veuillez remplir ce champ sans chiffres ni caractères spéciaux (é, &, @, etc...)", input);
        }
    });
});
