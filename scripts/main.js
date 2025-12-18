import "./modules/navbar.js";
import "./modules/modal.js";

document.querySelectorAll(".svg-icon")?.forEach((el) => {
  const src = el.getAttribute("data-src");
  el.style.setProperty("--src", `url(${src})`);
});

export const removeElement = (el) => {
  if (!el) return;
  el.classList.add("removing");
  el.addEventListener(
    "transitionend",
    () => {
      el.remove();
    },
    { once: true }
  );
};

// Scroll to Top

const backToTop = document.querySelector("#back-to-top");

const circle = backToTop.querySelector("#back-to-top circle");

if (circle) {
  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;

  circle.style.strokeDasharray = `${circumference}`;
  circle.style.strokeDashoffset = `${circumference}`;

  function updateProgress() {
    if (window.scrollY > 100) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }

    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.min(Math.max(scrollTop / docHeight, 0), 1);

    const offset = circumference - scrollPercent * circumference;
    circle.style.strokeDashoffset = offset;
  }

  window.addEventListener("scroll", updateProgress);
  updateProgress();
}

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const accordions = document.querySelectorAll(".accordion");

accordions?.forEach((accordion) => {
  const title = accordion.querySelector(".accordion-title");

  title?.addEventListener("click", () => {
    if (accordion.dataset.enabled === "true") {
      accordion.dataset.enabled = "false";
    } else {
      accordion.dataset.enabled = "true";
    }
  });
});

// file input

const fileInputs = document.querySelectorAll(".file-input");

fileInputs.forEach((fileInput) => {
  const input = fileInput.querySelector("input");
  const placeholder = fileInput.querySelector(".placeholder");

  input.addEventListener("change", (e) => {
    const file = e.target.files[0];
    placeholder.setAttribute("data-value", file.name);
  });
});

// Warranty Register Form validation

const warrantyForm = document.querySelector("#warranty-register form");

warrantyForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(warrantyForm);

  const data = Object.fromEntries(formData.entries());
});
