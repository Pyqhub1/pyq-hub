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

});/* ================================
   AUTO BREADCRUMB SYSTEM
================================ */

document.addEventListener("DOMContentLoaded", function () {

    const container = document.querySelector(".container");

    if (!container) return;

    const path = window.location.pathname;
    const page = path.split("/").pop();

    const pages = {
        "ctet.html": {
            parent: "Home",
            parentLink: "index.html",
            name: "CTET"
        },

        "ctet-paper1.html": {
            parent: "CTET",
            parentLink: "ctet.html",
            name: "Paper 1"
        },

        "ctet-paper2.html": {
            parent: "CTET",
            parentLink: "ctet.html",
            name: "Paper 2"
        }
    };

    const current = pages[page];

    if (!current) return;

    const breadcrumb = document.createElement("div");

    breadcrumb.className = "breadcrumb";

    breadcrumb.innerHTML = `
        <a href="index.html">Home</a>
        <span>›</span>
        ${
            current.parent === "Home"
            ? `<span>${current.name}</span>`
            : `<a href="${current.parentLink}">${current.parent}</a>
               <span>›</span>
               <span>${current.name}</span>`
        }
    `;

    container.insertBefore(
        breadcrumb,
        container.firstElementChild
    );

});