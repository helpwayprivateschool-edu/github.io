"use strict";

const images = [
    "slide_1", "slide_2", "slide_3",
    "slide_4", "slide_5", "slide_6",
    "slide_7"
];
let index = 0;
const threshold = images.length;
const banner_image = document.querySelector(".slider_image");

document.addEventListener("DOMContentLoaded", () => {
    setInterval(slide, 3000);
});

let slide = () => {
    index++;
    if (index >= threshold) {
        index = 0;
    }
    banner_image.src = `../frontend/static/images/slide_images/${images[index]}.jpg`;
}