/* EN - Checks if the user selected any language in select and redirects to the chosen page. */
const selectLanguage = document.querySelector("select");

selectLanguage.addEventListener('change', () => {
    language = selectLanguage.value;
    
    switch (language) {
        case "en":
            location = "index.html";
            break;
    }
});