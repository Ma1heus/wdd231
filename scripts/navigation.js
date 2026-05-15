const button = document.querySelector("#menu-button");
const menu = document.querySelector("#menu");

button.addEventListener("click", function () {
    menu.classList.toggle("open");

    if (menu.classList.contains("open")) {
        button.textContent = "✖";
    } else {
        button.textContent = "☰";
    }
})