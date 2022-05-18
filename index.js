/* burger */
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector(".header__burger-btn").addEventListener("click", function() {
    document.querySelector(".header__nav").classList.add("active");
  })
  document.querySelector(".header__burger-close").addEventListener("click", function() {
    document.querySelector(".header__nav").classList.remove("active");
  })
})
