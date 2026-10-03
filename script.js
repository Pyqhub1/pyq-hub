/* =========================================
   PYQ HUB - MAIN JAVASCRIPT
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       SEARCH
       ========================= */

    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");

    function searchWebsite() {

        if (!searchInput) return;

        const searchText = searchInput.value.trim().toLowerCase();

        const allCards = document.querySelectorAll(
            ".exam-card, .paper-card, .subject-card"
        );

        let firstMatch = null;

        allCards.forEach(function (card) {

            const cardText = card.textContent.toLowerCase();
            const isMatch =
                searchText === "" || cardText.includes(searchText);

            if (isMatch) {

                /* Paper cards use flex layout */
                if (card.classList.contains("paper-card")) {
                    card.style.display = "flex";
                } else {
                    card.style.display = "";
                }

                if (searchText !== "" && !firstMatch) {
                    firstMatch = card;
                }

            } else {

                card.style.display = "none";

            }

        });

        /* Scroll to first result */
        if (firstMatch) {

            setTimeout(function () {

                firstMatch.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }, 100);
        }
    }


    /* Search Button */
    if (searchBtn) {
        searchBtn.addEventListener("click", searchWebsite);
    }


    /* Enter Key */
    if (searchInput) {
        searchInput.addEventListener("keydown", function (event) {

            if (event.key === "Enter") {
                event.preventDefault();
                searchWebsite();
            }

        });


        /* Clear results when input becomes empty */
        searchInput.addEventListener("input", function () {

            if (searchInput.value.trim() === "") {
                searchWebsite();
            }

        });
    }


    /* =========================
       MOBILE MENU
       ========================= */

    const menuBtn = document.getElementById("mobileMenuBtn");
    const navMenu = document.getElementById("mainNav");

    if (menuBtn && navMenu) {

        menuBtn.addEventListener("click", function () {

            const isOpen = navMenu.classList.toggle("active");

            menuBtn.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            menuBtn.setAttribute(
                "aria-label",
                isOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
            );

            menuBtn.textContent = isOpen ? "✕" : "☰";

        });


        /* Close menu after clicking a link */
        navMenu.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                navMenu.classList.remove("active");

                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuBtn.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

                menuBtn.textContent = "☰";

            });

        });


        /* Close menu when clicking outside */
        document.addEventListener("click", function (event) {

            if (
                navMenu.classList.contains("active") &&
                !navMenu.contains(event.target) &&
                !menuBtn.contains(event.target)
            ) {

                navMenu.classList.remove("active");

                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuBtn.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

                menuBtn.textContent = "☰";

            }

        });

    }

});