import { gsap } from "/libs/gsap/index.js";

export const openModal = (target) => {
  const modal = document.querySelector(target);

  if (modal) {
    gsap
      .timeline({
        defaults: {
          duration: 0.5,
          ease: "power4.out",
        },
      })
      .fromTo(modal, { autoAlpha: 0 }, { autoAlpha: 1 })
      .fromTo(modal.querySelector(".modal-content"), { autoAlpha: 0, scale: 0.95 }, { autoAlpha: 1, scale: 1 }, "-=0.25");
    document.body.style.overflow = "hidden";
    modal.dataset.enabled = "true";
  }
};

export const closeModal = (target) => {
  const modal = document.querySelector(target);

  if (modal) {
    gsap
      .timeline({ defaults: { duration: 0.5, ease: "power4.out" } })
      .fromTo(modal.querySelector(".modal-content"), { autoAlpha: 1, scale: 1 }, { autoAlpha: 0, scale: 0.95 })
      .fromTo(modal, { autoAlpha: 1 }, { autoAlpha: 0 }, "-=0.25");
    document.body.style.overflowY = "scroll";
    modal.dataset.enabled = "false";
  }
};

window.addEventListener("DOMContentLoaded", () => {
  const closeButton = document.querySelectorAll(".close-modal-button");

  closeButton.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.target;
      target && closeModal(target);
    });
  });

  const openButton = document.querySelectorAll(".open-modal-button");

  openButton?.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.target;
      target && openModal(target);
    });
  });
});

export const openModalByReplace = (target) => {
  const modals = document.querySelectorAll(".modal");
  const modal = document.querySelector(target);

  modals?.forEach((modal) => {
    modal.dataset.enabled === "true" && closeModal(`#${modal.id}`);
  });

  setTimeout(() => {
    openModal(`#${modal.id}`);
  }, 500);
};
