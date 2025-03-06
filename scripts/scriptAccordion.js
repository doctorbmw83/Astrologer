document.querySelectorAll(".accordion-button").forEach((button) => {
    button.addEventListener("click", () => {
        // Закрыть все остальные секции
        const allContents = document.querySelectorAll(".accordion-content");
        allContents.forEach((content) => {
            if (content !== button.nextElementSibling) {
                content.style.display = "none";
            }
        });

        // Переключить текущее содержимое
        const content = button.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});
