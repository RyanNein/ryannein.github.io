
// Main display:
const header = document.querySelector("header");

const palName = document.getElementById("display-pal-name");
const displayImage = document.getElementById("display-pal-img");
const callAudioPlayer = document.getElementById("pal-call-audio");
const callButton = document.getElementById("display-call-button");
const palDescription = document.getElementById("display-description");

// Stat sliders:
const hpSlider = document.getElementById("stats-hp");
const strengthSlider = document.getElementById("stats-str");
const manaStrengthSlider = document.getElementById("stats-mstr");
const defenseSlider = document.getElementById("stats-def");
const manaDefenseSlider = document.getElementById("stats-mdef");
const speedSlider = document.getElementById("stats-spd");

// Stat labels:
const hpAmount = document.getElementById("hp-amount");
const strengthAmount = document.getElementById("strength-amount");
const manaStrengthAmount = document.getElementById("mana-strength-amount");
const defenseAmount = document.getElementById("defense-amount");
const manaDefenseAmount = document.getElementById("mana-defense-amount");
const speedAmount = document.getElementById("speed-amount");


const listWrapper = document.querySelector(".list-wrapper");

const searchInput = document.getElementById("pal-search-input");

const sortDropdown = document.getElementById("sort-dropdown");

const notFoundMessage = document.getElementById("pal-not-found");

let allPicoPals = {};

fetch("JS/picoPalData.json")
    .then(response => response.json())
    .then(data => {
        allPicoPals = data;
        sortPicoPals();
        handleSearch();
    })
    .catch(error => console.error("Error loading Pico Pal JSON data: ", error))

// filterAlphabetical.addEventListener('change', sortPicoPals);
// filterHp.addEventListener('change', sortPicoPals);

searchInput.addEventListener("input", handleSearch);

sortDropdown.addEventListener("change", sortPicoPals);

function populatePicoPals(picoPals) {
    listWrapper.innerHTML = '';

    picoPals.forEach(pal => {
        const div = document.createElement("div");
        div.classList.add("pal-list-item");
        div.innerHTML = `
            <img src="Images/spr_pal_${pal.name.toLowerCase()}.png" alt="${pal.name}">
        `;

        div.addEventListener("click", () => {
            header.style.display = "block";
            populateMainDisplay(pal)
            clearSelections();
            div.classList.add("selected");
        })

        listWrapper.appendChild(div);
    });
}

function clearSelections() {
    const allItems = document.querySelectorAll(".pal-list-item");
    allItems.forEach(item => {
        item.classList.remove("selected");
    });
}

function populateMainDisplay(mainPal) {
    palName.innerHTML = mainPal.name;
    displayImage.src = `Images/spr_pal_${mainPal.name.toLowerCase()}.png`

    callAudioPlayer.src = `Audio/sfx_${mainPal.name.toLowerCase()}_cry.wav`
    callButton.onclick = () => callAudioPlayer.play();

    palDescription.innerHTML = mainPal.description;

    // stats:
    
    hpSlider.value = mainPal.stats.hp;
    hpAmount.innerHTML = mainPal.stats.hp;
    
    strengthSlider.value = mainPal.stats.attack;
    strengthAmount.innerHTML = mainPal.stats.attack;

    manaStrengthSlider.value = mainPal.stats.manaAttack;
    manaStrengthAmount.innerHTML = mainPal.stats.manaAttack;

    defenseSlider.value = mainPal.stats.defense;
    defenseAmount.innerHTML = mainPal.stats.defense;

    manaDefenseSlider.value = mainPal.stats.manaDefense;
    manaDefenseAmount.innerHTML = mainPal.stats.manaDefense;

    speedSlider.value = mainPal.stats.speed;
    speedAmount.innerHTML = mainPal.stats.speed;


    window.scrollTo({ top: 0, behavior: 'smooth'});
}


function handleSearch() {
    const query = searchInput.value.toLowerCase();
    if (query === ""){
        notFoundMessage.style.display = 'none';
        return;
    }

    const filteredPals = Object.values(allPicoPals).filter(pal => pal.name.toLowerCase().includes(query));

    if (filteredPals.length > 0) {
        notFoundMessage.style.display = 'none';
        populatePicoPals(filteredPals);
    } else {
        listWrapper.innerHTML = ''; 
        notFoundMessage.style.display = 'block';
    }
}


function sortPicoPals() {
    let sortedPals;
    var sortValue = sortDropdown.value;

    switch(sortValue) {
        case "alphabetical":
            sortedPals = Object.values(allPicoPals).sort((a, b) => a.name.localeCompare(b.name));
            break;
        case "hp":
            sortedPals = Object.values(allPicoPals).sort((a, b) => b.stats.hp - a.stats.hp);
            break;
        case "strength":
            sortedPals = Object.values(allPicoPals).sort((a, b) => b.stats.attack - a.stats.attack);
            break;
        case "manaStrength":
            sortedPals = Object.values(allPicoPals).sort((a, b) => b.stats.manaAttack - a.stats.manaAttack);
            break;
        case "defense":
            sortedPals = Object.values(allPicoPals).sort((a, b) => b.stats.defense - a.stats.defense);
            break;
        case "manaDefense":
            sortedPals = Object.values(allPicoPals).sort((a, b) => b.stats.manaDefense - a.stats.manaDefense);
            break;
        case "speed":
            sortedPals = Object.values(allPicoPals).sort((a, b) => b.stats.speed - a.stats.speed);
            break;
        default:
            sortedPals = Object.values(allPicoPals);
    }

    populatePicoPals(sortedPals);
}