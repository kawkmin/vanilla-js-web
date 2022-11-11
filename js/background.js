const images = [
    "0.jpeg",
    "1.jpeg",
    "2.jpeg"
];

const chosenImgae = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImgae}`;

document.body.appendChild(bgImage);
bgImage.id = "bgImage";