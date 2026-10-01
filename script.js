// My Guide to Nakameguro - Zen Interactions
document.addEventListener("DOMContentLoaded", () => {
  // Highlight active nav link based on current path
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav-links a");
  
  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (currentPath.endsWith(href) || (href === "index.html" && (currentPath.endsWith("/") || currentPath.endsWith("/index.html")))) {
      link.classList.add("active");
    }
  });

  // Soft fade-in animation for cards
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -40px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".place-card, .detail-section").forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(16px)";
    el.style.transition = "opacity 0.6s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)";
    observer.observe(el);
  });
});
