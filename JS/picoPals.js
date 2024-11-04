const picoPalData = [
    { imagePath: "../Media/PicoPals/spr_pal_baba.png", audioPath: "../Media/PicoPals/sfx_baba_cry.wav" },
    { imagePath: "../Media/PicoPals/spr_pal_beetle.png", audioPath: "../Media/PicoPals/sfx_beetle_cry.wav" },
    { imagePath: "../Media/PicoPals/spr_pal_bord.png", audioPath: "../Media/PicoPals/sfx_bord_cry.wav" },
    { imagePath: "../Media/PicoPals/spr_pal_bull_head.png", audioPath: "../Media/PicoPals/sfx_bull_head_cry.wav" },
    { imagePath: "../Media/PicoPals/spr_pal_crab.png", audioPath: "../Media/PicoPals/sfx_crab_cry.wav" },
    { imagePath: "../Media/PicoPals/spr_pal_diamond.png", audioPath: "../Media/PicoPals/sfx_diamond_cry.wav" },
    { imagePath: "../Media/PicoPals/spr_pal_dino.png", audioPath: "../Media/PicoPals/sfx_dino_cry.wav" },
    { imagePath: "../Media/PicoPals/spr_pal_doggo.png", audioPath: "../Media/PicoPals/sfx_doggo_cry.wav" },
    { imagePath: "../Media/PicoPals/spr_pal_duck.png", audioPath: "../Media/PicoPals/sfx_duck_cry.wav" },
    { imagePath: "../Media/PicoPals/spr_pal_fish.png", audioPath: "../Media/PicoPals/sfx_fish_cry.wav" },
    { imagePath: "../Media/PicoPals/spr_pal_flowey.png", audioPath: "../Media/PicoPals/sfx_flowey_cry.wav" },
    { imagePath: "../Media/PicoPals/spr_pal_pincher.png", audioPath: "../Media/PicoPals/sfx_pincher_cry.wav" },
    { imagePath: "../Media/PicoPals/spr_pal_slime.png", audioPath: "../Media/PicoPals/sfx_slime_cry.wav" },
    { imagePath: "../Media/PicoPals/spr_pal_turtle.png", audioPath: "../Media/PicoPals/sfx_turtle_cry.wav" },
    { imagePath: "../Media/PicoPals/spr_pal_tweezap.png", audioPath: "../Media/PicoPals/sfx_tweezap_cry.wav" },
    { imagePath: "../Media/PicoPals/spr_pal_volcano.png", audioPath: "../Media/PicoPals/sfx_volcano_cry.wav" },
];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

document.addEventListener("DOMContentLoaded", () => {
    shuffle(picoPalData);

    const picoPal01 = new PicoPal("pico-pal-01", picoPalData[0].imagePath, picoPalData[0].audioPath, randomXPosition());
    picoPal01.startWalking();

    const picoPal02 = new PicoPal("pico-pal-02", picoPalData[1].imagePath, picoPalData[1].audioPath, randomXPosition());
    picoPal02.startWalking();

    const picoPal03 = new PicoPal("pico-pal-03", picoPalData[2].imagePath, picoPalData[2].audioPath, randomXPosition());
    picoPal03.startWalking();

    const picoPal04 = new PicoPal("pico-pal-04", picoPalData[3].imagePath, picoPalData[3].audioPath, randomXPosition());
    picoPal04.startWalking();

    const picoPal05 = new PicoPal("pico-pal-05", picoPalData[4].imagePath, picoPalData[4].audioPath, randomXPosition());
    picoPal05.startWalking();

    // const sound = document.getElementById("pico-pal-sound");
});

function randomXPosition() {
    return Math.floor(Math.random() * (window.innerWidth - 100));
}

class PicoPal {
    constructor(imageId, imagePath, audioPath, startX) {
        this.image = document.getElementById(imageId);
        this.image.src = imagePath;
        this.audioPath = audioPath;
        this.position = startX;
        this.speed = 1;
        this.direction = 1; // 1 for right, -1 for left
        this.image.onload = () => {
            this.imageWidth = this.image.offsetWidth;
            this.windowWidth = window.innerWidth;
            this.startWalking();
        };
        this.image.addEventListener("click", () => {
            this.playSound();
        })
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

    playSound() {
        const audio = new Audio(this.audioPath);
        audio.play();
    }
}
