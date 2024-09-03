//ARTH\\

document.addEventListener("DOMContentLoaded", function () {
  // Fade in the content
  const container = document.querySelector(".container");
  setTimeout(() => {
    container.style.opacity = 1;
    container.style.transform = "translateY(0)";
  }, 500);

  // Button hover effect
  const buttons = document.querySelectorAll(".button");
  buttons.forEach((button) => {
    button.addEventListener("mouseover", function () {
      button.style.transform = "scale(1.1)";
      button.style.boxShadow = "0 4px 10px rgba(255, 255, 255, 0.3)";
    });
    button.addEventListener("mouseout", function () {
      button.style.transform = "scale(1)";
      button.style.boxShadow = "none";
    });
  });

  // Glow effect on title
  const title = document.querySelector("h1");
  title.style.animation = "glow 1.5s infinite";

  // Scroll effect for sections
  const sections = document.querySelectorAll("section");
  const options = {
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  }, options);

  sections.forEach((section) => {
    observer.observe(section);
  });

  // Smooth scroll for links
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    });
  });
});
