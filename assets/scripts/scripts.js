// Simple Mobile Menu Toggle
function toggleMenu() {
  const nav = document.querySelector(".nav-links");
  nav.classList.toggle("active");
}

// Smooth Scroll for older browsers
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const logo = document.querySelector('.logo')
logo.addEventListener("click", function (e) {
  e.preventDefault();
  document.body.scrollIntoView({
    behavior: "smooth",
  });
});

const contact = document.querySelector('.contact-mobile')
contact.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(this.getAttribute("href")).scrollIntoView({
    behavior: "smooth",
  });
});

// --- ANIMATION OBSERVER ---
// This detects when elements enter the screen and adds the 'active' class
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1, // Trigger when 10% of the element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target); // Only animate once
    }
  });
}, observerOptions);

// Select all elements with the 'reveal' class
document.querySelectorAll(".reveal").forEach((el) => {
  observer.observe(el);
});

// // --- Carousel Logic ---
// const track = document.querySelector(".carousel-track");
// const slides = Array.from(document.querySelectorAll(".carousel-slide"));
// const nextBtn = document.querySelector(".carousel-btn.next");
// const prevBtn = document.querySelector(".carousel-btn.prev");

// let currentIndex = 0;

// function updateCarousel() {
//   track.style.transform = `translateX(-${currentIndex * 100}%)`;
// }

// nextBtn.addEventListener("click", () => {
//   currentIndex = (currentIndex + 1) % slides.length;
//   updateCarousel();
// });

// prevBtn.addEventListener("click", () => {
//   currentIndex =
//     (currentIndex - 1 + slides.length) % slides.length;
//   updateCarousel();
// });




// --- Carousel Logic ---
const track = document.querySelector(".carousel-track");
const slides = Array.from(document.querySelectorAll(".carousel-slide"));
const nextBtn = document.querySelector(".carousel-btn.next");
const prevBtn = document.querySelector(".carousel-btn.prev");

let currentIndex = 0;
let autoSlideInterval = null;
const AUTO_SLIDE_DELAY = 5000;

function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
}

function startAutoSlide() {
  stopAutoSlide();
  autoSlideInterval = setInterval(nextSlide, AUTO_SLIDE_DELAY);
}

function stopAutoSlide() {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
    autoSlideInterval = null;
  }
}

// Button controls
nextBtn.addEventListener("click", () => {
  nextSlide();
  startAutoSlide(); // reset timer on manual action
});

prevBtn.addEventListener("click", () => {
  prevSlide();
  startAutoSlide(); // reset timer on manual action
});

// Start looping automatically
startAutoSlide();



// Copyright year update
let currentYear = new Date().getFullYear();
let yearElement = document.querySelector(".copyright-year");
yearElement.innerHTML = currentYear;