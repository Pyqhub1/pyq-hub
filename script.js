const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

function searchWebsite() {

    const searchText = searchInput.value.trim().toLowerCase();

    const allCards = [
        ...document.querySelectorAll(".exam-card"),
        ...document.querySelectorAll(".paper-card"),
        ...document.querySelectorAll(".subject-card")
    ];

    let firstMatch = null;

    allCards.forEach(function(card) {

        const text = card.textContent.toLowerCase();

        if (searchText === "") {

            if (card.classList.contains("paper-card")) {
                card.style.display = "flex";
            } else {
                card.style.display = "";
            }

        } else if (text.includes(searchText)) {

            if (card.classList.contains("paper-card")) {
                card.style.display = "flex";
            } else {
                card.style.display = "";
            }

            if (!firstMatch) {
                firstMatch = card;
            }

        } else {

            card.style.display = "none";

        }

    });

    if (firstMatch) {

        setTimeout(function() {

            firstMatch.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 100);

    }
}searchInput.addEventListener("input", function () {

    if (searchInput.value.trim() === "") {
        searchWebsite();
    }

});