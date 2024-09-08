document.addEventListener("DOMContentLoaded", () => {
  // Button hover effect
  const buttons = document.querySelectorAll(".button, .home-button");
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      button.style.backgroundColor = "#ffffff";
      button.style.color = "#ff0000";
      button.style.transition = "all 0.3s ease";
    });
    button.addEventListener("mouseleave", () => {
      button.style.backgroundColor = "#ff0000";
      button.style.color = "#ffffff";
    });
  });

  // Smooth scroll effect for navigation
  const smoothScrollLinks = document.querySelectorAll("a[href^='#']");
  smoothScrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  // Fade-in effect when the page loads
  const container = document.querySelector(".container");
  container.style.opacity = 0;
  window.addEventListener("load", () => {
    container.style.transition = "opacity 2s ease";
    container.style.opacity = 1;
  });

  // Cool animated background
  const body = document.body;
  body.style.background =
    "linear-gradient(-45deg, #1f1f1f, #121212, #ff0000, #0f0f0f)";
  body.style.backgroundSize = "400% 400%";
  body.style.animation = "backgroundAnimation 10s ease infinite";
});

