
let isDarkMode = localStorage.getItem("isDarkMode") === "true";

document.addEventListener("navLoaded", setupDarkMode);

let toggleButton;
let buttonImage;
let aLinks;

// homepage only:
const subNav = document.querySelector("#sub-nav");
const logoImg = document.querySelector("#logo");
const thumbnailTitles = document.querySelectorAll(".title");


function setupDarkMode()
{
    toggleButton = document.querySelector("#dark-mode-toggle-button");

    if (!toggleButton)
        return;

    buttonImage = toggleButton.querySelector("img");
    aLinks = document.querySelectorAll("a");

    toggleButton.addEventListener("click", () => {
        if (!isDarkMode)
            enableDarkMode();
        else
            disableDarkMode();
    });

    if (isDarkMode)
        enableDarkMode();
    else
        disableDarkMode();
}



function enableDarkMode() {
    document.body.classList.add("dark-mode");
    
    aLinks.forEach(a => {
        a.style.color = "#ccc";
    });

    buttonImage.src = "/Media/Homepage/icon_sun.png";

    if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {
        subNav.classList.add("sub-nav-dark");

        logoImg.src = "/Media/Homepage/logo_white.png";
        
        for (let title of thumbnailTitles) 
            title.style.color = "white";
    }

    localStorage.setItem("isDarkMode", "true");
    isDarkMode = true;
}

function disableDarkMode() {
    document.body.classList.remove("dark-mode");
    
    aLinks.forEach(a => {
        a.style.color = "#333";
    });

    buttonImage.src = "/Media/Homepage/icon_moon.png";

    if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {
        subNav.classList.remove("sub-nav-dark");
        
        logoImg.src = "/Media/Homepage/logo_black.png";

        for (let title of thumbnailTitles) 
            title.style.color = "black";
    }

    localStorage.setItem("isDarkMode", "false");
    isDarkMode = false;
}