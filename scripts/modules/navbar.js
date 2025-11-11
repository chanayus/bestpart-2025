import { gsap } from "/libs/gsap/index.js";

const mobileNavToggle = document.querySelectorAll(".mobile-nav-toggle");
const langSwitcher = document.querySelector("#lang-switcher");

let prevScrollY = window.scrollY || 0;

let menuEnabled = false;

console.log(document.querySelector("#mobile-nav"));

mobileNavToggle?.forEach((btn) =>
  btn?.addEventListener("click", () => {
    if (menuEnabled) {
      gsap.timeline({ defaults: { duration: 0.35 } }).fromTo("#mobile-nav", { autoAlpha: 1 }, { autoAlpha: 0 });
    } else {
      gsap
        .timeline({ defaults: { duration: 0.5, ease: "power4.out" } })

        .fromTo("#mobile-nav", { autoAlpha: 0 }, { autoAlpha: 1 })
        .fromTo("#mobile-nav .menu-list > a", { autoAlpha: 0, y: 15 }, { autoAlpha: 1, y: 0, stagger: 0.1 }, "-=0.25");

      // .fromTo("#mobile-nav .mobile-nav-content", { autoAlpha: 0, scale: 0.9 }, { autoAlpha: 1, scale: 1 }, "-=0.25")

      // .fromTo("#mobile-nav a", { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.2, stagger: 0.05 }, "-=0.25");
    }

    menuEnabled = !menuEnabled;
  })
);

window.addEventListener("scroll", () => {
  if (window.scrollY < prevScrollY || window.scrollY <= 80) {
    gsap.to("#navbar", { yPercent: 0, duration: 0.2 });
  } else {
    gsap.to("#navbar", { yPercent: -100, duration: 0.2 });
  }

  prevScrollY = window.scrollY;
});

langSwitcher?.addEventListener("click", () => {
  langSwitcher.classList.toggle("active");
});
