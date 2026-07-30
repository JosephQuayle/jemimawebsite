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

//services
function showService(event, service, button) {
  event.preventDefault();
  //for each button, set back to defaults
  document.querySelectorAll(".mini-nav-btn button").forEach((btn) => {
    btn.style.backgroundColor = "rgb(255, 208, 242)";
    btn.style.border = "none";
  });

  //then apply changes to clicked button to show it's active
  button.style.backgroundColor = "rgb(233, 196, 222)";
  button.style.border = "solid 1px rgb(34, 41, 48)";

  //then depending on the service chosen, show/hide them
  switch (service) {
    //1-1 coaching
    case 1:
      // code block

      break;
    //strength
    case 2:
      // code block

      break;
    //fat loss
    case 3:
      // code block

      break;
    //chat
    case 4:
      // code block

      break;
    default:
    // code block
  }
}
// faqs
const faqs = [
  {
    question: "What equipment do I need to get started?",
    answer:
      "You can begin with zero equipment. Your plan adapts to whatever you have—bodyweight, dumbbells, or a full home gym.",
  },
  {
    question: "How does online coaching work week-to-week?",
    answer:
      "You get structured workouts, check-ins, form feedback, and messaging support so you always know exactly what to do.",
  },
  {
    question: "Will my plan be customised to my goals?",
    answer:
      "Yes. Every training and nutrition plan is tailored to your goals, schedule, experience level, and lifestyle.",
  },
  {
    question: "What if I’m a beginner or returning after a long break?",
    answer:
      "Your plan starts at a safe, achievable level with clear video demos and progressions to build confidence and consistency.",
  },
];

const faqGrid = document.querySelector(".faq-grid");

faqs.forEach((question) => {
  const card = document.createElement("div");
  card.classList.add("faq-card");

  const pQuestion = document.createElement("p");
  pQuestion.textContent = question.question;
  pQuestion.classList.add("faq-question");

  const pPlus = document.createElement("p");
  pPlus.classList.add("faq-card-plus");

  const spanPlus = document.createElement("a");
  spanPlus.textContent = "+";
  spanPlus.classList.add("faq-card-plus-a");

  card.appendChild(pQuestion);
  card.appendChild(pPlus);
  card.appendChild(spanPlus);

  const pAnswer = document.createElement("p");
  pAnswer.textContent = question.answer;
  pAnswer.classList.add("faq-answer");
  pAnswer.style.display = "none";
  pAnswer.style.marginTop = "1rem";

  card.appendChild(pAnswer);

  spanPlus.addEventListener("click", () => {
    if (pAnswer.style.display === "none") {
      pAnswer.style.display = "block";
      spanPlus.textContent = "–";
    } else {
      pAnswer.style.display = "none";
      spanPlus.textContent = "+";
    }
  });

  faqGrid.appendChild(card);
});

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
