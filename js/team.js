// Responsiveness for Navigation
const menuBtn = document.querySelector(".menu-btn")
const navigation = document.querySelector(".navigation")

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active")
    navigation.classList.toggle("active")

})


var swiper = new Swiper('.blog-slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
  }
});