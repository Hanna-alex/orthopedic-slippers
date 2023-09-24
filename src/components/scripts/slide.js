const swiper = new Swiper('.selection__slides', {

  slidesPerView: 1,
  loop: true,



  thumbs: {
    swiper: {
      el: '.mini-slide',
      slidesPerView: 4,
      spaceBetween: 12,
      mousewheel: {
        sensitivity: 1,
        eventsTarget: '.selection__mini-slide'

      }
    }
  }


});