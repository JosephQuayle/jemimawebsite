// let testimonials = [];
// testimonials[0] = [
//   "I’ve never felt stronger. Her coaching changed my life.",
//   "- Sarah M.",
// ];
// testimonials[1] = [
//   "Finally a trainer who understands women’s fitness properly.",
//   "— Emily R.",
// ];
// testimonials[2] = [
//   "Finally a trainer who understands women’s fitness properly.",
//   "— Emily R.",
// ];

// let testimonialSection = document.getElementById("testimonials");

// //for each testimonial
// //create a new div with class testimonial
// //then cerate a p element for the testimonial text (first index)
// //then create a span element for the testimonial author (second index)
// //append new div to testimonialSection

// for (let i = 0; i < testimonials.length; i++) {
//   const wrapper = document.createElement("div");
//   wrapper.classList.add("testimonial");

//   const p = document.createElement("p");
//   p.textContent = testimonials[i][0];

//   const span = document.createElement("span");
//   span.textContent = testimonials[i][1];

//   const br = document.createElement("br");

//   wrapper.appendChild(p);
//   wrapper.appendChild(span);

//   testimonialSection.appendChild(wrapper);
//   //   testimonialSection.appendChild(br);
// }

let testimonials = [
  ["I’ve never felt stronger. Her coaching changed my life.", "- Sarah M."],
  ["Finally a trainer who understands women’s fitness properly.", "— Emily R."],
  ["Finally a trainer who understands women’s fitness properly.", "— Emily R."],
];

let testimonialSection = document.getElementById("testimonials");

// Create the wrapper once
const wrapper = document.createElement("div");
wrapper.classList.add("testimonial");

const p = document.createElement("p");
const span = document.createElement("span");

wrapper.appendChild(p);
wrapper.appendChild(span);
testimonialSection.appendChild(wrapper);

let index = 0;

function showTestimonial(i) {
  wrapper.classList.remove("show"); // fade out

  setTimeout(() => {
    p.textContent = testimonials[i][0];
    span.textContent = testimonials[i][1];

    wrapper.classList.add("show"); // fade in
  }, 400); // half the transition time
}

// Start
showTestimonial(index);

// Rotate every 4 seconds
setInterval(() => {
  index = (index + 1) % testimonials.length;
  showTestimonial(index);
}, 4000);

// gallery
const galleryImages = [
  "./img/img0.jpg",
  "./img/img1.jpg",
  "./img/img2.jpg",
  "./img/img3.jpg",
  "./img/img4.jpg",
  "./img/img5.jpg",
];

const galleryGrid = document.querySelector(".gallery-grid");

galleryImages.forEach((src) => {
  const card = document.createElement("div");
  card.className = "gal-card";

  const container = document.createElement("div");
  container.className = "gal-img-container";
  container.style.width = "100%";

  const img = document.createElement("img");
  img.src = src;
  img.alt = "";
  img.style.width = "100%";

  container.appendChild(img);
  card.appendChild(container);
  galleryGrid.appendChild(card);
});

const galleryPrev = document.querySelector(".prev");
const galleryNext = document.querySelector(".next");

let currentIndex = 0;

function updateSlider() {
  const offset = currentIndex * -100;
  galleryGrid.style.transform = `translateX(${offset}%)`;
}

galleryPrev.onclick = () => {
  currentIndex =
    (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  updateSlider();
};

galleryNext.onclick = () => {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  updateSlider();
};
