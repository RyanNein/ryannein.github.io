let isDarkMode = localStorage.getItem("isDarkMode") === "true";

document.addEventListener("navLoaded", setupDarkMode);

let toggleButton;
let mobileToggleButton;
let buttonImage;
let mobileButtonImage;
let aLinks;

// homepage only:
const subNav = document.querySelector("#sub-nav");
const logoImg = document.querySelector("#logo");
const thumbnailTitles = document.querySelectorAll(".title");

function setupDarkMode()
{
    // Desktop toggle
    toggleButton = document.querySelector("#dark-mode-toggle-button");

    // Mobile toggle
    mobileToggleButton = document.querySelector("#dark-mode-toggle-button-mobile");

    // If neither exists, bail out
    if (!toggleButton && !mobileToggleButton)
        return;

    // Desktop icon
    if (toggleButton)
        buttonImage = toggleButton.querySelector("img");

    // Mobile icon
    if (mobileToggleButton)
        mobileButtonImage = mobileToggleButton.querySelector("img");

    aLinks = document.querySelectorAll("a");

    // Shared toggle function
    const toggle = () => {
        if (!isDarkMode)
            enableDarkMode();
        else
            disableDarkMode();
    };

    // Attach listeners
    if (toggleButton)
        toggleButton.addEventListener("click", toggle);

    if (mobileToggleButton)
        mobileToggleButton.addEventListener("click", toggle);

    // Initialize mode
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

    if (buttonImage)
        buttonImage.src = "/Media/Homepage/icon_sun.png";

    if (mobileButtonImage)
        mobileButtonImage.src = "/Media/Homepage/icon_sun.png";

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

    if (buttonImage)
        buttonImage.src = "/Media/Homepage/icon_moon.png";

    if (mobileButtonImage)
        mobileButtonImage.src = "/Media/Homepage/icon_moon.png";

    if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {
        subNav.classList.remove("sub-nav-dark");
        
        logoImg.src = "/Media/Homepage/logo_black.png";

        for (let title of thumbnailTitles) 
            title.style.color = "black";
    }

    localStorage.setItem("isDarkMode", "false");
    isDarkMode = false;
}
