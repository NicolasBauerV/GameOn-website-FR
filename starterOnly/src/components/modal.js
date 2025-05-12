const modalBtn = document.querySelectorAll(".modal-btn");
const modalbg = document.querySelector(".bground");
const btnClose = document.querySelector("#close-modal");

export default function openCloseModal() {
    const [openModalBtn, closeModalBtn] = modalBtn;

    openModalBtn.addEventListener("click", () => {
        modalbg.style.display = "block";
    });

    closeModalBtn.addEventListener("click", () => {
        modalbg.style.display = "none";
    });

    btnClose.addEventListener("click", () => {
        modalbg.style.display = "none";
    });
}
