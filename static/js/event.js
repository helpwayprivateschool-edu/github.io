"use strict";

const api_address = "127.0.0.1:5000"
const api_url = "http://" + api_address + "/news";

// get all news
// https://www.javascripttutorial.net/javascript-fetch-api/
async function fetchNEWS(url) {
    try {
        let response = await fetch(url, {method:'GET', headers:{'Content-Type':'application/json'}});
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

// show result
async function renderNEWS() {

    try {
        let data = await fetchNEWS(api_url);
        // console.log(data.news);
        let html = '';

        data = data.news;

        data.forEach(news => {
            let htmlSegment = `<div class="recents">
                            <img src="${news.image_link}" alt="img" class="recents_image" >
                            <p class="recent_description">${news.text}</p>
                        </div>`;

            html += htmlSegment;
        });

        let container = document.querySelector('.recent_catalog');
        container.innerHTML = html;
    } catch (error) {
        console.log(error);
    }
}

window.addEventListener('load', () => {
    renderNEWS();
})

document.addEventListener("DOMContentLoaded", () => {
    scrolToFixedHeader(document.querySelector(".header"));
    const gic_image = document.querySelectorAll(".gic_image"); 
    const enrol_btn = document.querySelector(".enrol_btn");
    const main_div = document.querySelector(".main");
    const tags = document.querySelectorAll(".anchor");
    const enrolment_form = document.querySelector(".enrolment_form");
    singleImageDisplay(gic_image);
    hideMain(enrol_btn, main_div, enrolment_form);
    showMain(tags, main_div, enrolment_form);
    toggle();
    //toTop();
});

function singleImageDisplay(gic_image) {
    const displayImage = document.querySelector(".single_display_image");
    gic_image.forEach(gicimage => {
        gicimage.addEventListener("click", () => {
            displayImage.src = gicimage.src;
        });
    });
}

function hideMain(enrol_btn, main_div, enrolment_form) {
    enrol_btn.addEventListener("click", () => {
        if (!main_div.classList.contains("hide")) {
            main_div.classList.add("hide");
            enrolment_form.classList.remove("hide");
        }
    });
}

function showMain(tags, main_div, enrolment_form) {
    tags.forEach(tag => {
        tag.addEventListener("click", () => {
            if (main_div.classList.contains("hide")){
                if(tag.innerHTML != "ADMISSION" && tag.innerHTML != "APPLY NOW") {
                    main_div.classList.remove("hide");
                    enrolment_form.classList.add("hide");
                }
            }
        });
    }); 
}

function toggle() {
    const application_form = document.querySelector(".application");
    const toggle_btn = document.querySelector(".toggle_btn");
    toggle_btn.addEventListener("click", ()=> {
        if (application_form.classList.contains("hide")) {
            application_form.classList.remove("hide");
            toggle_btn.innerHTML = "Hide the form";
        } else {
            application_form.classList.add("hide");
            toggle_btn.innerHTML = "Click to register";
        }
    })
}

function scrolToFixedHeader(header) {
    window.addEventListener("scroll", () => {
        if (window.scrollY >= 30) {
            if (!header.classList.contains("fixed")) {
                header.classList.add("fixed")
                document.querySelector(".lm_ulist").style.marginTop = "0";
                document.querySelector(".rm_ulist").style.marginTop = "0";
                document.querySelectorAll(".header .a").forEach(a => {
                    a.style.color = "#fff";
                });
                document.querySelector(".logo_con").classList.add("resize");
                document.querySelector(".logo_con .logo").classList.add("adjust");
            }
        } else {
            header.classList.remove("fixed")
            document.querySelector(".lm_ulist").style.marginTop = "35px";
            document.querySelector(".rm_ulist").style.marginTop = "35px";
            document.querySelectorAll(".header a, .header .a").forEach(a => {
                a.style.color = "rgb(129, 129, 129)";
            });
            document.querySelector(".logo_con").classList.remove("resize");
            document.querySelector(".logo_con .logo").classList.remove("adjust");
        }
    });
}



// function toTop() {
//     document.querySelector(".home")
//     .addEventListener("click", () => {
//         setInterval(autoTop, 1000);
//     });
// }

// function autoTop() {
//     if (window.scrollY <= 0) {
//         return;
//     }
    
//     window.scrollY--;
// }