const modalBtn = document.querySelectorAll(".modal-btn");
const modalbg = document.querySelector(".bground");

export default function OpenCloseModal() {
    const [openModalBtn, closeModalBtn] = modalBtn;

    openModalBtn.addEventListener("click", () => {
        modalbg.style.display = "block";
    });

    closeModalBtn.addEventListener("click", () => {
        modalbg.style.display = "none";
    });
}
