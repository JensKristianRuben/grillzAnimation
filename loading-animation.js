const images = [
    "pictures/picture1.jpg",
    "pictures/picture2.jpg",
    "pictures/picture3.jpg",
    "pictures/picture4.jpg",
    "pictures/picture5.jpg",
    "pictures/picture6.jpg",
    "pictures/picture7.jpg",
    "pictures/picture8.jpg",
    "pictures/picture9.jpg",
    "pictures/picture10.jpg",
]

let currentImage = 0;
let delay = 300;
let counter = 0;
const maxCycles = images.length * 6;

function nextImage() {
    if (counter < maxCycles) {

        document.getElementById("slideshow").src = images[currentImage];
        currentImage = (currentImage + 1) % images.length;

        setTimeout(nextImage, delay);
        counter++;
        delay = delay - 10;
    }
    if (counter === maxCycles) {
        document.getElementById("slideshow").classList.remove("frame");
        document.getElementById("slideshow").classList.add("logo");
        document.getElementById("slideshow").src = "pictures/logogrygrillz.png";
        
            document.getElementsByClassName("logo")[0].classList.add("fade-out-and-end-animation");
            setTimeout(() => {
                document.getElementsByClassName("container")[0].style.display = "none";
            }, 4000);
    }
    
}

nextImage();