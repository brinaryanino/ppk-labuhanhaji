// JavaScript for dropdown functionality
document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

  dropdownToggles.forEach(function (toggle) {
    toggle.addEventListener("click", function () {
      const guideSection = this.closest(".guide-section");
      guideSection.classList.toggle("open");
    });
  });
});
