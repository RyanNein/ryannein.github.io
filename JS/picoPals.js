const imagePaths = [
    "../Media/PicoPals/spr_pal_beetle.png",
    "../Media/PicoPals/spr_pal_bord.png",
    "../Media/PicoPals/spr_pal_bull_head.png",
    "../Media/PicoPals/spr_pal_dino.png",
    "../Media/PicoPals/spr_pal_doggo.png",
    "../Media/PicoPals/spr_pal_duck.png",
    "../Media/PicoPals/spr_pal_fish.png",
    "../Media/PicoPals/spr_pal_flowey.png",
    "../Media/PicoPals/spr_pal_pincher.png",
    "../Media/PicoPals/spr_pal_turtle.png",
    "../Media/PicoPals/spr_pal_tweezap.png",
];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

document.addEventListener("DOMContentLoaded", () => {
    shuffle(imagePaths); // Shuffle the image paths

    const picoPal01 = new PicoPal("pico-pal-01", imagePaths[0], randomXPosition());
    picoPal01.startWalking();

    const picoPal02 = new PicoPal("pico-pal-02", imagePaths[1], randomXPosition());
    picoPal02.startWalking();

    const picoPal03 = new PicoPal("pico-pal-03", imagePaths[2], randomXPosition());
    picoPal03.startWalking();

    const picoPal04 = new PicoPal("pico-pal-04", imagePaths[3], randomXPosition());
    picoPal04.startWalking();

    const picoPal05 = new PicoPal("pico-pal-05", imagePaths[4], randomXPosition());
    picoPal05.startWalking();

    const sound = document.getElementById("pico-pal-sound");
    document.querySelectorAll(".pico-pal").forEach(img => {
        img.addEventListener("click", () => sound.play());
    });
});

function randomXPosition() {
    return Math.floor(Math.random() * (window.innerWidth - 100));
}

class PicoPal {
    constructor(imageId, imagePath, startX) {
        this.image = document.getElementById(imageId);
        this.image.src = imagePath;
        this.position = startX;
        this.speed = 1;
        this.direction = 1; // 1 for right, -1 for left
        this.image.onload = () => {
            this.imageWidth = this.image.offsetWidth;
            this.windowWidth = window.innerWidth;
            this.startWalking();
        };
    }

    walk() {
        this.position += this.speed * this.direction;

        // Random chance to switch directions
        if (Math.random() < 0.005) {
            this.direction *= -1;
        }
        // Clamping the position
        if (this.position < 0) {
            this.position = 0;
            this.direction *= -1;
        } else if (this.position + this.imageWidth > this.windowWidth) {
            this.position = this.windowWidth - this.imageWidth;
            this.direction *= -1;
        }
        this.image.style.transform = this.direction === 1 ? "scaleX(1)" : "scaleX(-1)";
        this.image.style.left = this.position + "px";
        requestAnimationFrame(this.walk.bind(this));
    }

    startWalking() {
        requestAnimationFrame(this.walk.bind(this));
    }
}
