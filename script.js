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
