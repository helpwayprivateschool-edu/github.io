"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const alternateTabs = document.querySelectorAll(".section_title");
    clickTab(alternateTabs);
});

function clickTab(tab) {
    tab.forEach((tab, index) => {
        const aboutTab = document.querySelector(".about_tab");
        const howTab = document.querySelector(".how_tab");
        const _t1 = document.querySelector(".section_title_1");
        const _t2 = document.querySelector(".section_title_2");
        tab.addEventListener("click", () => {
            if (index === 0) {
                aboutTab.classList.remove("hide");
                howTab.classList.add("hide");
                _t1.style.backgroundColor = "#eee";
                _t2.style.backgroundColor = "rgba(40, 40, 40, .125)";

                _t1.style.borderLeftColor = "red";
                _t2.style.borderRightColor = "rgba(40, 40, 40, .125)";
            } else if (index === 1) {
                aboutTab.classList.add("hide");
                howTab.classList.remove("hide");
                _t1.style.backgroundColor = "rgba(40, 40, 40, .125)";
                _t2.style.backgroundColor = "#eee";
                
                _t1.style.borderLeftColor = "rgba(40, 40, 40, .125)";
                _t2.style.borderRightColor = "red";
            }
        });
    });
}