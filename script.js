
let currentLanguage = "en";

function changeLanguage() {
    const elements = document.querySelectorAll("[data-en][data-ar]");

    if (currentLanguage === "en") {
        // Change language to Arabic
        currentLanguage = "ar";

        document.body.classList.add("arabic");

        document.documentElement.lang = "ar";
        document.documentElement.dir = "rtl";

        elements.forEach(function (element) {
            element.textContent = element.getAttribute("data-ar");
        });

        document.getElementById("language-btn").textContent = "English";

    } else {
        // Change language to English
        currentLanguage = "en";

        document.body.classList.remove("arabic");

        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";

        elements.forEach(function (element) {
            element.textContent = element.getAttribute("data-en");
        });

        document.getElementById("language-btn").textContent = "العربية";
    }
}
