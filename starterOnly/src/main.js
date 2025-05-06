import onToggleNavbar from "./components/navbar.js";
import openCloseModal from "./components/modal.js";
import validateTextInput from "./modules/validateInputsText.js";
import validateEmailField from "./modules/validateEmailField.js";
import validateDateField from "./modules/validateDateField.js";
import validateRadioInputs from "./modules/validateRadioInputs.js";
import validateCheckox from "./modules/validateCheckbox.js";

onToggleNavbar();
openCloseModal();

// DOM Elements
const form = document.querySelector("form");
const inputsText = document.querySelectorAll(`input[type="text"]`);
const dateInput = document.querySelector("#birthdate");
const emailField = document.querySelector("#email");
const quantityField = document.querySelector("#quantity");
const radioInputs = document.querySelectorAll(`input[name="location"]`);
const checkbox = document.querySelector(`#checkbox1`);

// Interdire les dates ultérieures à aujourd'hui
const today = new Date().toISOString().split("T")[0];
dateInput.setAttribute("max", today);
dateInput.value = today; // On insère la date à aujourd'hui

inputsText.forEach((input) => {
    input.addEventListener("input", () => validateTextInput(input));
});
dateInput.addEventListener("change", () => validateDateField(dateInput, today));
emailField.addEventListener("input", () => validateEmailField(emailField));
quantityField.addEventListener("input", () =>
    validateQuantityField(quantityField)
);
radioInputs.forEach((input) => {
    input.addEventListener("change", () => {
        validateRadioInputs(input);
    });
});

checkbox.addEventListener("click", () => validateCheckox(checkbox));

// When all inputs are valid
form.addEventListener("submit", (e) => {
    e.preventDefault();
});
