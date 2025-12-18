import { gsap } from "/libs/gsap/index.js";

const mobileNavToggle = document.querySelectorAll(".mobile-nav-toggle");
const langSwitcher = document.querySelector("#lang-switcher");

let prevScrollY = window.scrollY || 0;

let menuEnabled = false;

mobileNavToggle?.forEach((btn) =>
  btn?.addEventListener("click", () => {
    if (menuEnabled) {
      gsap.timeline({ defaults: { duration: 0.35 } }).fromTo("#mobile-nav", { autoAlpha: 1 }, { autoAlpha: 0 });
    } else {
      gsap
        .timeline({ defaults: { duration: 0.375, ease: "power4.out" } })

        .fromTo("#mobile-nav", { autoAlpha: 0 }, { autoAlpha: 1 })
        .fromTo("#mobile-nav .menu-list > *", { autoAlpha: 0, y: 15 }, { autoAlpha: 1, y: 0, stagger: 0.075 }, "-=0.25")
        .fromTo("#mobile-nav #mobile-lang-switcher", { autoAlpha: 0, y: 15 }, { autoAlpha: 1, y: 0 }, "-=0.375");
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

const mobileNavLinks = document.querySelectorAll("#mobile-nav .menu-list a");

mobileNavLinks?.forEach((link) => {
  link.addEventListener("click", () => {
    menuEnabled = false;
    gsap.timeline({ defaults: { duration: 0.35 } }).fromTo("#mobile-nav", { autoAlpha: 1 }, { autoAlpha: 0 });
  });
});
