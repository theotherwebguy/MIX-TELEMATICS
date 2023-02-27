const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentSlide = 0;

// Show the current slide
const showSlide = () => {
  slides.forEach((slide) => slide.classList.remove('active'));
  slides[currentSlide].classList.add('active');
};

// Go to the next slide
const nextSlide = () => {
  currentSlide++;
  if (currentSlide > slides.length - 1) {
    currentSlide = 0;
  }
  showSlide();
};

// Go to the previous slide
const prevSlide = () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide();
};

// Event listeners for slide controls
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Show the first slide
showSlide();