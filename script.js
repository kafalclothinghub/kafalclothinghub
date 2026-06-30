document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("siteHeader");

  function updateHeader() {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 60);
  }

  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();

  document.querySelectorAll(".filter-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.dataset.category;

      document.querySelectorAll(".filter-btn").forEach((item) => {
        item.classList.toggle("active", item === button);
      });

      document.querySelectorAll(".category-container").forEach((container) => {
        const shouldShow = category === "all" || container.dataset.category === category;
        container.classList.toggle("is-hidden", !shouldShow);
      });
    });
  });

  function createParticles() {
    const container = document.getElementById("particles");
    if (!container) return;

    for (let index = 0; index < 34; index += 1) {
      const particle = document.createElement("span");
      particle.className = "particle";
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.setProperty("--move-x", `${Math.random() * 70 - 35}px`);
      particle.style.setProperty("--time", `${3 + Math.random() * 5}s`);
      particle.style.animationDelay = `${Math.random() * 3}s`;
      container.appendChild(particle);
    }
  }

  createParticles();

  document.querySelectorAll("img").forEach((image) => {
    image.addEventListener("error", () => {
      const visualBox = image.closest(".product-image-wrapper, .image-card");
      if (visualBox) {
        visualBox.classList.add("image-missing");
      }
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetSelector = anchor.getAttribute("href");
      if (!targetSelector || targetSelector === "#") return;

      const target = document.querySelector(targetSelector);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  const revealItems = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("in-view"));
  }

  if (window.matchMedia("(hover: hover)").matches) {
    document.querySelectorAll(".product-card").forEach((card) => {
      card.addEventListener("mousemove", (event) => {
        const box = card.getBoundingClientRect();
        const x = (event.clientX - box.left) / box.width - 0.5;
        const y = (event.clientY - box.top) / box.height - 0.5;
        card.style.transform = `translateY(-9px) rotateX(${y * -5}deg) rotateY(${x * 5}deg)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });
    });
  }

  console.log("Kafal Clothing Hub - enhanced website active");
});
