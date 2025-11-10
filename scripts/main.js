import "./modules/navbar.js";

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
      console.log("end");
    },
    { once: true }
  );
};
