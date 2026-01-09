import { openModal } from "../modules/modal.js";

const perPage = 4;

const prevBtn = document.querySelector(".image-prev");
const nextBtn = document.querySelector(".image-next");

const slide = document.querySelector(".image-slide");

prevBtn.addEventListener("click", () => {
  slide.scrollLeft -= 100;
});

nextBtn.addEventListener("click", () => {
  slide.scrollLeft += 100;
});

if (slide.querySelectorAll(".item").length <= perPage) {
  prevBtn.style.display = "none";
  nextBtn.style.display = "none";

  slide.classList.add("disable");
}

// Select Image

let imageSelectIndex = 0;

const imagePreview = document.querySelector("#image-preview img");

const imageSlide = document.querySelectorAll(".image-slide .item");

imageSlide?.forEach((slide, index) => {
  const image = slide.querySelector("img");

  slide.addEventListener("click", () => {
    imageSelectIndex = index;
    imagePreview.src = image.src;
    updateActiveImageState();
  });
});

const updateActiveImageState = () => {
  imageSlide?.forEach((slide, index) => {
    if (imageSelectIndex === index) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
};

updateActiveImageState();

// Image Preview Popup

const zoomImgButtons = document.querySelectorAll(".zoom-btn");

const modal = document.querySelector("#img-preview");
const modalContentImg = modal?.querySelector(".modal-content");

zoomImgButtons?.forEach((button) => {
  button.addEventListener("click", (e) => {
    const imageTarget = document.querySelector(`.image-slide .item:nth-of-type(${imageSelectIndex + 1}) img`);

    if (!imageTarget) return;

    const image = imageTarget.src;
    const target = button.dataset.modalTarget;

    if (!image || !target || !modalContentImg) return;

    modalContentImg.src = image;

    openModal(target);
  });
});
