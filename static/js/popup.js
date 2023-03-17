"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const popup = document.querySelector(".popup").classList;
    toggleButton(popup);
    cancelButton(popup);
    alternateCancelButton(popup);
});

function toggleButton(p) {
    document.querySelector(".pum_container")
    .addEventListener("click", () => {
        if (p.contains("hide")) {
            p.remove("hide")
        }
    });
}

function cancelButton(p) {
    document.querySelector(".cancel")
    .addEventListener("click", () => {
        if (!p.contains("hide")) {
            p.add("hide");
        }
    });  
}

function alternateCancelButton(p) {
    document.querySelectorAll(".alt_cancel")
    .forEach(alt_cancel => {
        alt_cancel.addEventListener("click", () => {
            if (!p.contains("hide")) {
                p.add("hide");
            }
        });
    });
}