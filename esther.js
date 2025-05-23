document.addEventListener("DOMContentLoaded", function () {
  const slideElements = document.querySelectorAll(".slide-in");

  function checkSlide() {
    slideElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      // When element is 90% within the viewport, add "visible" class
      if (rect.top < window.innerHeight * 0.9) {
        element.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", checkSlide);
  checkSlide(); // Check on page load in case some elements are already in view
});


document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const faqItem = button.parentElement;
      faqItem.classList.toggle('active');
    });
  });
});
