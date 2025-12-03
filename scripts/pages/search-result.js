import Swiper from "https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs";

const carSwiper = new Swiper("#car-slide", {
  slidesPerView: 3,
  spaceBetween: 20,
  centeredSlides: true,
  navigation: {
    nextEl: ".car-next",
    prevEl: ".car-prev",
  },

  breakpoints: {
    0: {
      direction: "horizontal",
      slidesPerView: 3,
    },
    768: {
      direction: "horizontal",
      slidesPerView: 3,
    },
    1025: {
      slidesPerView: 3,
      verticalClass: "vertical-swiper",
      direction: "vertical",
    },
  },
});

const paginations = document.querySelectorAll(".pagination-control");

paginations.forEach((pg) => {
  const targetSelector = pg.getAttribute("data-target");
  const container = document.querySelector(targetSelector);
  if (!container) return;

  const items = Array.from(container.querySelectorAll(".result-item"));
  const perPage = parseInt(container.dataset.perPage, 10) || 6;

  const totalPages = Math.ceil(items.length / perPage);
  let currentPage = 1;

  const display = pg.querySelector(".page-display");
  const progress = pg.querySelector(".progress");
  const prevBtn = pg.querySelector(".prev");
  const nextBtn = pg.querySelector(".next");

  function render() {
    const start = (currentPage - 1) * perPage;
    const end = start + perPage;

    items.forEach((item, i) => {
      if (i >= start && i < end) item.classList.remove("hidden");
      else item.classList.add("hidden");
    });

    // update page text
    display.textContent = `${currentPage}/${totalPages}`;

    // update progress bar (ความกว้างตามสัดส่วน)
    const percent = (currentPage / totalPages) * 100;
    progress.style.setProperty("--progress", percent + "%");

    // disable prev/next
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
  }

  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      render();
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      render();
    }
  });

  render();
});

const categories = document.querySelectorAll(".category");

categories.forEach((category) => {
  const targetSelector = category.getAttribute("data-target");
  const products = document.querySelectorAll(`${targetSelector} .product-item`);
  const count = category.querySelector(`.count`);

  count.innerHTML = "" + products.length + " สินค้า";
});
