const toggleButton = document.getElementById("toggle-mode");
const body = document.body;
const icon = toggleButton.querySelector("i");

toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Alterna o ícone (lua 🌙 / sol ☀️)
    if (body.classList.contains("dark-mode")) {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    } else {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }
});