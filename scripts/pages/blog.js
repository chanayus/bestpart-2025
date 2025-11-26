import Swiper from "https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs";
import { openModal, closeModal } from "../modules/modal.js";

const imageSlide = new Swiper("#image-slide", {
  // loop: true,
  slidesPerView: 3,
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".image-next",
    prevEl: ".image-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.25,
    },
    580: {
      slidesPerView: 2.25,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

const zoomImgButtons = document.querySelectorAll(".zoom-btn");
const closeModalButton = document.querySelector(".close-modal-button");

const modal = document.querySelector(".modal");
const modalContentImg = modal?.querySelector(".modal-content");

zoomImgButtons?.forEach((button) => {
  button.addEventListener("click", (e) => {
    const image = button.dataset.src;
    const target = button.dataset.modalTarget;

    console.log(target, image);
    if (!image || !target || !modalContentImg) return;

    modalContentImg.src = image;
    openModal(target);
  });
});

closeModalButton?.addEventListener("click", () => {
  closeModal(".modal");
});
