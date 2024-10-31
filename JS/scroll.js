
const scrollButton = document.getElementById("scroll-button");

window.onscroll = function() { scrollFunction(); };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = "block";
    }
    else {
        scrollButton.style.display = "none";
    }
}

scrollButton.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});