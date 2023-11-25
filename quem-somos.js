const carousel = document.querySelector(".carousel");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const indicators = document.querySelectorAll(".indicator");
let currentIndex = 0;

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % carousel.children.length;
  updateCarousel();
});

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
  updateCarousel();
});

indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    currentIndex = index;
    updateCarousel();
  });
});

function updateCarousel() {
  const translateX = -currentIndex * 100 + "%";
  carousel.style.transform = `translateX(${translateX})`;
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle("active", index === currentIndex);
  });
}

setInterval(function () {

  currentIndex += 1;

  let tamanho_carousel = carousel.children.length - 1;

  if (currentIndex > tamanho_carousel) {
    currentIndex = 0;
  }
  updateCarousel();
}, 200);