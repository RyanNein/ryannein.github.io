
let isDarkMode = localStorage.getItem("isDarkMode") === "true";

const toggleButton = document.querySelector("#dark-mode-toggle-button");
const buttonImage = toggleButton.querySelector("img");
const subNav = document.querySelector("#sub-nav");
const logoImg = document.querySelector("#logo");
const linkTreeImg = document.querySelector("#links a img");
const thumbnailTitles = document.querySelectorAll(".title");


toggleButton.addEventListener("click", () => {
    if (!isDarkMode) {
        enableDarkMode();
    }
    else {
        disableDarkMode();
    }
});


if (isDarkMode)
    enableDarkMode();
else
    disableDarkMode();


function enableDarkMode() {
    document.body.classList.add("dark-mode");
    subNav.classList.add("sub-nav-dark");

    logoImg.src = "Media/Homepage/logo_white.png";
    linkTreeImg.src = "Media/Homepage/linktree_logo_white.png";

    buttonImage.src = "Media/Homepage/icon_sun.png";

    for (let title of thumbnailTitles) 
        title.style.color = "white";

    localStorage.setItem("isDarkMode", "true");
    isDarkMode = true;
}

function disableDarkMode() {
    document.body.classList.remove("dark-mode");
    subNav.classList.remove("sub-nav-dark");

    logoImg.src = "Media/Homepage/logo_black.png"
    linkTreeImg.src = "Media/Homepage/linktree_logo_black.png";

    buttonImage.src = "Media/Homepage/icon_moon.png";

    for (let title of thumbnailTitles) 
        title.style.color = "black";

    localStorage.setItem("isDarkMode", null);
    isDarkMode = false;
}
