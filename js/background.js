const images = [
    "france1.jpeg",
    "france2.jpeg",
    "france3.jpeg"
]


const chosenImage = images[Math.floor(Math.floor(Math.random() * images.length))]

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);