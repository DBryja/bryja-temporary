document.addEventListener("DOMContentLoaded", () => {
  // Hover popup
  const popup = document.querySelector(".popup--hover");
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.addEventListener(
      "mouseover",
      (e) => {
        popup.style.opacity = 0;
        setTimeout(() => {
          popup.style.display = "none";
        }, 300);
      },
      { once: true }
    );
  });

  // Resize sekcji kontakt
  const contact = document.querySelector(".contact .content");
  const exp = document.querySelector(".experience .content");

  const setEqualHeight = () => {
    if (window.outerWidth < 1000) {
      contact.style.height = "auto";
      return;
    }
    const expHeight = exp.offsetHeight;
    contact.style.height = expHeight + "px";
  };

  setEqualHeight();

  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(setEqualHeight, 0);
  });
});
