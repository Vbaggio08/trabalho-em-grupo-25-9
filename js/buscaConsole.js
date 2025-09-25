document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById("searchBar");
    const consoleCards = document.querySelectorAll("#consoleList .card");

    const validSearchRegex = /^[a-zA-Z0-9\s]{3,}$/;

    searchBar.addEventListener("input", () => {
        const searchTerm = searchBar.value.trim();


        if (!validSearchRegex.test(searchTerm)) {
            searchBar.classList.add("invalid");

            consoleCards.forEach(card => {
                card.style.display = "flex";
            });

            return;
        }

        searchBar.classList.remove("invalid");

        const lowerSearchTerm = searchTerm.toLowerCase();

        consoleCards.forEach(card => {
            const title = card.querySelector("h3").textContent.toLowerCase();
            if (title.includes(lowerSearchTerm)) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }
        });
    });
});
