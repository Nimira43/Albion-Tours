const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 4000,
    disablwOnInteraction: false
  },
  effect: 'fade',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
})

let menu = document.querySelector.Selector('.menu')
let nums = document.querySelector.Selector('.num')
let start = false