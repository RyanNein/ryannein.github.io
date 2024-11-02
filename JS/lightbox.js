
document.addEventListener("DOMContentLoaded", () => {
    const lightboxItems = document.querySelectorAll(".lightbox-item img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    // const closeButton = document.querySelector(".lightbox-close");
    
    console.log("hello");

    lightboxItems.forEach(item => {
        item.addEventListener("click", () => {
            lightboxImage.src = item.src;
            lightbox.style.display = "block";
        });
    });

    lightboxImage.addEventListener("click", () => {
        lightbox.style.display = "none";
    })

    // closeButton.addEventListener("click", () => {
    //     lightbox.style.display = "none";
    // });
});

