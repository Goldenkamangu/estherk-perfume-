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
  

  