document.getElementById("hamburger").addEventListener("click", function () {
  const nav = document.querySelector(".nav-links");
  nav.classList.toggle("active");
  this.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let currentIndex = 0;
  const totalSlides = slides.length;

  function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Atualiza dots
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  }

  // Navegação por dots
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateSlider();
    });
  });

  // Botões de navegação
  prevBtn.addEventListener("click", () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : totalSlides - 1;
    updateSlider();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = currentIndex < totalSlides - 1 ? currentIndex + 1 : 0;
    updateSlider();
  });

  // Auto-play (opcional)
  setInterval(() => {
    currentIndex = currentIndex < totalSlides - 1 ? currentIndex + 1 : 0;
    updateSlider();
  }, 5000);
});
