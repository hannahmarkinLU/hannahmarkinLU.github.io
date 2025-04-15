// Get elements
const modal = document.getElementById("volunteer-modal");
const btn = document.getElementById("volunteer-btn");
const form = document.getElementById("volunteer-form");
const closeBtn = document.querySelector(".close-btn");

// Open modal
btn.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Handle form submit
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you! Your organization will reach out to you soon.');
  modal.style.display = 'none';
  form.reset();
});

let slideIndex = 1;
let slideInterval;

// Initialize the slideshow
showSlides(slideIndex);

// Auto-advance to next image
function autoSlide() {
  slideInterval = setInterval(() => {
    plusSlides(1);
  }, 8000);
}

// Start auto-sliding
autoSlide();

// Next/previous controls
function plusSlides(n) {
  clearInterval(slideInterval); // Pause auto-sliding when manually navigating
  showSlides(slideIndex += n);
  autoSlide(); // Resume auto-sliding after manual navigation
}

// Thumbnail controls
function currentSlide(n) {
  clearInterval(slideInterval);
  showSlides(slideIndex = n);
  autoSlide();
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}