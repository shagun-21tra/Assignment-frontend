const image = document.getElementById("sliderImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const slideNumberText = document.getElementById("slideNumber");

let slideIndex = 1;
let lastActionTime = 0;
let clickCount = 0;

function updateSlideNumber() {
  slideNumberText.textContent = `Slide #${slideIndex}`;
}

function loadImage() {
  image.src = `https://picsum.photos/600/400?random=${Date.now()}`;
  updateSlideNumber();
}

function throttledNavigation(direction) {
  const now = Date.now();
  const timeDiff = now - lastActionTime;

  clickCount++;

  if (timeDiff > 1000) {
    // Reset state
    clickCount = 1;
    lastActionTime = now;

    if (direction === "next") slideIndex++;
    else if (direction === "prev" && slideIndex > 1) slideIndex--;

    loadImage();
  } else if (clickCount > 3) {
    alert("Chill chill, loading it!!");
  }
}

nextBtn.addEventListener("click", () => throttledNavigation("next"));
prevBtn.addEventListener("click", () => throttledNavigation("prev"));

updateSlideNumber(); // Initial load
