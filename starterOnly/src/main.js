import onToggleNavbar from "./components/navbar.js";
import openCloseModal from "./components/modal.js";
import validateTextInput from "./modules/validateInputsText.js";
import validateEmailField from "./modules/validateEmailField.js";
import validateDateField from "./modules/validateDateField.js";
import validateQuantityField from "./modules/validateQuantityField.js";
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
const verifFields = [false, false, false, false, false, true];

// Interdire les dates ultérieures à aujourd'hui
const today = new Date().toISOString().split("T")[0];
dateInput.setAttribute("max", today);

inputsText.forEach((input) => {
    input.addEventListener("input", () => {
        verifFields[0] = validateTextInput(input);
    });
});
dateInput.addEventListener("change", () => {
    verifFields[1] = validateDateField(dateInput, today);
});
emailField.addEventListener("input", () => {
    verifFields[2] = validateEmailField(emailField);
});
quantityField.addEventListener("input", () => {
    verifFields[3] = validateQuantityField(quantityField);
});
checkbox.addEventListener("click", () => {
    verifFields[5] = validateCheckox(checkbox);
});

// When all inputs are valid (display if a field is missing)
form.addEventListener("submit", (e) => {
    e.preventDefault();
    inputsText.forEach((input) => {
        validateTextInput(input);
    });
    validateDateField(dateInput, today);
    validateEmailField(emailField);
    validateQuantityField(quantityField);
    verifFields[4] = validateRadioInputs(radioInputs);
    validateCheckox(checkbox);
    
    console.table(verifFields);
    if (verifFields.includes(false)) return;
    else {
        // Send to back end
        document.querySelector(".modal-success").style.display = "flex";
        document.querySelector(".modal-body").style.display = "none";
        setTimeout(() => {
            window.location.href = "./index.html";
        }, 2000);
    }
});
