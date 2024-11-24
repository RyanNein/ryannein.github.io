
const listWrapper = document.querySelector(".list-wrapper");
const searchInput = document.getElementById("pal-search-input");

const notFoundMessage = document.getElementById("pal-not-found");

let allPicoPals = {};

fetch("JS/picoPalData.json")
    .then(response => response.json())
.then(data => {
        allPicoPals = data;
        populatePicoPals();
    })
    .catch(error => console.error("Error loading Pico Pal JSON data: ", error))

function populatePicoPals() {
    for (const key in allPicoPals) {
        if (allPicoPals.hasOwnProperty(key)) {
            const currentPal = allPicoPals[key];
            const div = document.createElement("div");
            div.classList.add("pal-list-item");
            console.log(currentPal.name.toLowerCase());
            div.innerHTML = `
                <img src="Images/spr_pal_${currentPal.name.toLowerCase()}.png" alt="${currentPal.name}">
            `;
            listWrapper.appendChild(div);
        }
    }
}