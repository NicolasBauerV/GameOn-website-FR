export default function onToggleNavbar () {
    const navBar = document.getElementById("myTopnav");
    navBar.addEventListener("click", () => navBar.classList.toggle("responsive"));
};