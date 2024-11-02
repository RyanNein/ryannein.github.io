
let isDarkMode = localStorage.getItem("isDarkMode") === "true";

// every page:
const toggleButton = document.querySelector("#dark-mode-toggle-button");
const buttonImage = toggleButton.querySelector("img");

// homepage only:
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
    
    if (window.location.pathname.endsWith("index.html")) {
        subNav.classList.add("sub-nav-dark");

        buttonImage.src = "Media/Homepage/icon_sun.png";
        
        logoImg.src = "Media/Homepage/logo_white.png";
        linkTreeImg.src = "Media/Homepage/linktree_logo_white.png";
        
        for (let title of thumbnailTitles) 
            title.style.color = "white";
    }
    else {
        buttonImage.src = "../Media/Homepage/icon_sun.png";
    }

    localStorage.setItem("isDarkMode", "true");
    isDarkMode = true;
}

function disableDarkMode() {
    document.body.classList.remove("dark-mode");
    
    if (window.location.pathname.endsWith("index.html")) {
        subNav.classList.remove("sub-nav-dark");
        
        logoImg.src = "Media/Homepage/logo_black.png"
        linkTreeImg.src = "Media/Homepage/linktree_logo_black.png";
        
        buttonImage.src = "Media/Homepage/icon_moon.png";
        
        for (let title of thumbnailTitles) 
            title.style.color = "black";
    }
    else {
        buttonImage.src = "../Media/Homepage/icon_moon.png";
    }

    localStorage.setItem("isDarkMode", null);
    isDarkMode = false;
}
