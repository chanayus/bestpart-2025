import Swiper from "https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs";
import { data } from "../../data/cars.js";
import { removeElement } from "../main.js";
import { gsap } from "/libs/gsap/all.js";
import { ScrollTrigger } from "/libs/gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

// Reveal Animation

gsap.timeline().fromTo("header h3", { autoAlpha: 0, y: 25 }, { autoAlpha: 1, y: 0 }, "+=0.75");

gsap.fromTo(".warranty-section", { autoAlpha: 0, y: 25 }, { autoAlpha: 1, y: 0, scrollTrigger: { trigger: ".warranty-section", start: "-40% center" } }, "+=0.75");

gsap
  .timeline({
    scrollTrigger: { trigger: "#quote-section", start: "-40% center" },
  })
  .fromTo("#quote-section img", { autoAlpha: 0 }, { autoAlpha: 0.75 })
  .fromTo("#quote-section p", { autoAlpha: 0, x: -25 }, { autoAlpha: 1, x: 0, stagger: 0.2 }, "-=0.15");

gsap
  .timeline({
    scrollTrigger: { trigger: "#about-section", start: "top center" },
  })
  .fromTo("#about-section .container > *", { autoAlpha: 0, y: 25 }, { autoAlpha: 1, y: 0, stagger: 0.2 });

gsap.fromTo("#news-section", { autoAlpha: 0, y: 25 }, { autoAlpha: 1, y: 0, scrollTrigger: { trigger: "#news-section", start: "-40% center" } }, "+=0.75");

// Header Section

// ---------- search by car model --------------

const state = { brand: "", model: "", year: "" };
const steps = ["brand", "model", "year"];

const popup = document.querySelector("#car-select-popup");
const popupToggle = document.querySelector("#search-input-container .popup-toggle");
const tagContainer = document.querySelector("#search-input-container .tag-container");

const sections = steps.map((s) => popup.querySelector(`#${s}-list`));
const lists = Object.fromEntries(steps.map((s) => [s, popup.querySelector(`#${s}-list .list`)]));

// 🔹 สร้างปุ่มตัวเลือก
function createOption(value, category, onClick) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "option";
  btn.dataset.category = category;
  btn.dataset.value = value;
  btn.textContent = value;
  btn.onclick = onClick;
  return btn;
}

// 🔹 แสดงรายการใน step ถัดไป
function showNextOptions() {
  const { brand, model } = state;

  if (brand && !model) {
    lists.model.innerHTML = "";
    Object.keys(data[brand] || {}).forEach((m) => lists.model.appendChild(createOption(m, "model", onSelect)));
  } else if (brand && model) {
    lists.year.innerHTML = "";
    (data[brand]?.[model] || []).forEach((y) => lists.year.appendChild(createOption(y, "year", onSelect)));
  }
}

// 🔹 แสดง tag ที่เลือก (ปรับให้สร้าง 2 node แยก: บนสุด + ใน section)
function renderTags() {
  const createTag = (key) => {
    const tag = document.createElement("div");
    tag.className = "tag";
    tag.dataset.category = key;
    tag.textContent = state[key];

    const close = document.createElement("img");
    close.src = "../icons/x.svg";
    close.onclick = () => {
      const idx = steps.indexOf(key);
      steps.slice(idx).forEach((k) => (state[k] = ""));
      updateStep();
    };

    tag.appendChild(close);
    return tag;
  };

  // --- loop ทุก key ---
  steps.forEach((key) => {
    const value = state[key];
    const section = sections[steps.indexOf(key)];
    const listEl = section.querySelector(".list");

    // --- Section tag (ใต้ h6 ก่อน .list) ---
    const existingSectionTag = section.querySelector(".tag");

    if (!value) {
      // ถ้าไม่มีค่า → ลบ tag ทั้งใน section และ top ถ้ามี
      if (existingSectionTag) removeElement(existingSectionTag);

      const existingTopTag = tagContainer.querySelector(`[data-category="${key}"]`);
      if (existingTopTag) removeElement(existingTopTag);

      return;
    }

    // --- Section tag ---
    if (existingSectionTag) {
      // มี tag แล้วและค่าตรงกัน → ข้าม
      if (existingSectionTag.textContent.replace("×", "").trim() === value) {
        // ok no update
      } else {
        // อัปเดตข้อความ
        existingSectionTag.firstChild.nodeValue = value;
      }
    } else {
      // ยังไม่มี tag → สร้างใหม่
      const newSectionTag = createTag(key);
      section.insertBefore(newSectionTag, listEl);
    }

    // --- Top tag ---
    const existingTopTag = tagContainer.querySelector(`[data-category="${key}"]`);

    if (existingTopTag) {
      if (existingTopTag.textContent.replace("×", "").trim() === value) {
        // ok no update
      } else {
        existingTopTag.firstChild.nodeValue = value;
      }
    } else {
      const newTopTag = createTag(key);
      tagContainer.appendChild(newTopTag);
    }
  });
}

// 🔹 อัปเดต UI ตาม state ปัจจุบัน
function updateStep(tagCreateDelay = 0) {
  const activeStep = steps.findIndex((s) => !state[s]);
  const spanText = popupToggle.querySelector("span");
  sections.forEach((s) => s.classList.remove("active"));
  sections[activeStep]?.classList.add("active");

  if (activeStep === -1) {
    gsap.to(spanText, { autoAlpha: 0, duration: 0.15 });
  } else {
    gsap.timeline().to(spanText, { autoAlpha: 0, duration: 0.15 }).to(spanText, { autoAlpha: 1, duration: 0.15 }, "+=0.15");
    setTimeout(() => {
      spanText.innerHTML = activeStep === 0 ? "เลือกยี่ห้อรถยนต์" : activeStep === 1 ? "เลือกรุ่นรถยนต์" : "เลือกปีรถยนต์";
    }, 150);
  }

  setTimeout(() => renderTags(), tagCreateDelay);
  showNextOptions();
}

// 🔹 handler เมื่อเลือก option
function onSelect(e) {
  const { category, value } = e.target.dataset;
  state[category] = value;

  // ล้างค่าขั้นถัดไป เช่น เลือก brand ใหม่ → ล้าง model, year
  const nextIndex = steps.indexOf(category) + 1;
  steps.slice(nextIndex).forEach((k) => (state[k] = ""));

  updateStep(250);
}

// 🔹 เริ่มต้น
popup.querySelectorAll("button.option").forEach((b) => (b.onclick = onSelect));
popupToggle.addEventListener("click", () => popup.classList.toggle("active"));
updateStep();

// ---------- search by part name --------------

// search type switcher

let currentSearchType = "car-model"; // car-model, part-name

const search = document.querySelector("#search");

const carModelSearch = document.querySelector("#car-model-search");
const partNameSearch = document.querySelector("#part-name-search");

const partNameSearchInput = partNameSearch.querySelector("input");

const filterResult = partNameSearch.querySelector("#filter-result");
const inputAlert = filterResult.querySelector(".alert");

const searchTypeSwitcher = document.querySelectorAll(".search-type-switcher");

const filterResultCategories = filterResult.querySelector(".category");

searchTypeSwitcher.forEach((el) => {
  el?.addEventListener("click", (e) => {
    searchTypeSwitcher.forEach((el) => el.classList.remove("active"));
    e.target.classList.add("active");
    carModelSearch.classList.toggle("active");
    partNameSearch.classList.toggle("active");
  });
});

partNameSearchInput.addEventListener("input", (e) => {
  if (e.target.value.length < 2) {
    inputAlert.classList.add("active");
    inputAlert.innerHTML = "กรุณาค้นหาตั้งแต่ 2 ตัวอักษรขึ้นไป";
    filterResultCategories.classList.remove("active");
  } else {
    filterResultCategories.classList.add("active");
    inputAlert.classList.remove("active");
  }
});

// --------------------------------------------------------------------------------

// Product Section
const productCards = document.querySelectorAll("#product-section .product-card");
const productCategoryBtn = document.querySelectorAll("#product-section #product-categories .btn");

const productSlide = new Swiper("#product-slide", {
  initialSlide: 1,
  centeredSlides: true,
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.5,
    },
    580: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

function filterByCategory(category) {
  // toggle active
  productCategoryBtn.forEach((btn) => {
    if (btn.dataset.category === category) btn.classList.add("active");
    else btn.classList.remove("active");
  });

  // ทำลิสต์ใหม่ของ slides ที่ตรงหมวด
  const filtered = Array.from(productCards).filter((card) => card.dataset.category === category);

  // ล้าง slide เดิมทั้งหมด
  productSlide.removeAllSlides();

  // เพิ่ม slide ที่ตรงหมวดเท่านั้น
  productSlide.appendSlide(filtered);

  // รีเฟรช swiper
  productSlide.slideTo(1, 0);
  productSlide.update();
}

productCategoryBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => filterByCategory(btn.dataset.category));
});

filterByCategory("brake-pad");

// News Section

const newsSlide = new Swiper("#news-slide", {
  // loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".news-next",
    prevEl: ".news-prev",
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
