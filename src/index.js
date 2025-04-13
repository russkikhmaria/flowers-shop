document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".reviews__content__items");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  let currentIndex = 0;

  const showSlide = (index) => {
    slides.forEach((slide, i) => {
      slide.classList.remove("reviews__content__items__active");
      slide.style.display = "none";
      if (i === index) {
        slide.classList.add("reviews__content__items__active");
        slide.style.display = "block";
      }
    });
  };

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  });

  showSlide(currentIndex); // стартовый слайд
});