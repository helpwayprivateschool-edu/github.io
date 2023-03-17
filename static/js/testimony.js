"use strict";

const pt_images = {
  images: ["pt001", "pt002", "pt003", "pt004", "pt005"],
  statements: [
    "Helpway as a citadel of learning has great impact on my children's academic development. As the name implies, it has helped not only academically, but spiritually and morally as well. God Bless the school management and staff.",
    "Helpway a way that leads to success, a way that guides to greatness, a purposeful platform that is concerns for the future of tomorrow leaders. Moral upbringing of every child is their concern, their relationship a supreme God is a priority. Knowledge and discipline is not negotiable. Culture and traditions are recognized to high esteem. Helpway careds for the pupils as their own children. I am proud to have association with helpway. Indeed, helpway is a gift to the new generation of great learners, Helpway Private School Jos is a way that helps.",
    "Helpway administration is an open minded and thinks outside the box to make the school a successful educational experience for the pupils. It is committed to a whole child. They teach value lessons, communication and leadership skills. Patriotism is also presents in their activities. Helpway has been a very positive experience for our family. If you want to give a child(ren) a stella education while they are nurtured to be their best, most confident selves then I encourage you to seek out Helpway Private School Jos. Great team great school!",
    "Helpway Private School Jos, the great citadel of learning has really impacted my children. This institution will continue to soar higher and hatch great men and women in the society",
    "Helpway Private School Jos, the great citadel of learning has really impacted my children. This institution will continue to soar higher and hatch great men and women in the society",
  ],
  names: ["Mr. Machido Dakama", "Mr. Samuel", "Mr. Ali", "name", "name"],
};

const p_images = {
  images: ["p001", "p002", "p003", "p004", "p005"],
  statements: [
    "Helpway Private School, Jos, has helped me realize my innate potential and opened my eyes to unending world of opportunities.",
    "Helpway Private School, Jos, has helped me realize my innate potential and opened my eyes to unending world of opportunities.",
    "Helpway Private School, Jos, has helped me realize my innate potential and opened my eyes to unending world of opportunities.",
    "Helpway Private School, Jos, has helped me realize my innate potential and opened my eyes to unending world of opportunities.",
    "Helpway Private School, Jos, has helped me realize my innate potential and opened my eyes to unending world of opportunities.",
  ],
  names: ["name", "name", "name", "name", "name"],
};

let pt_index = 0;
let p_index = 0;

const pt_threshold = pt_images.images.length;
const p_threshold = p_images.images.length;
const parent_image = document.querySelector(".parent_image_slide");
const pupil_image = document.querySelector(".pupil_image_slide");
const pupil_statement = document.querySelector(".pupil_statement");
const parent_statement = document.querySelector(".parent_statement");
const parent_name = document.querySelector(".pt_name");
const pupil_name = document.querySelector(".p_name");

document.addEventListener("DOMContentLoaded", () => {
  setInterval(slide_testimony, 5000);
});

let slide_testimony = () => {
  p_index++;
  pt_index++;
  if (p_index >= p_threshold) {
    p_index = 0;
  }
  pupil_image.src = `./static/images/testifier_images/${p_images.images[0]}.jpg`;
  pupil_statement.innerHTML =
    p_images.statements[p_index].length > 120
      ? p_images.statements[p_index].substring(0, 120) + "..."
      : p_images.statements[p_index];
  pupil_name.innerHTML = p_images.names[p_index];
  if (pt_index >= pt_threshold) {
    pt_index = 0;
  }
  parent_image.src = `./static/images/testifier_images/${pt_images.images[0]}.jpg`;
  parent_statement.innerHTML =
    pt_images.statements[pt_index].length > 120
      ? pt_images.statements[pt_index].substring(0, 120) + "..."
      : pt_images.statements[pt_index];
  parent_name.innerHTML = pt_images.names[pt_index];
};
