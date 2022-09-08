// swiper
const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 3,
  // spaceBetween: 42,
  initialSlide: 0,
  allowTouchMove: false,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


// body background-color change
let swiperButtons = document.getElementsByClassName('swiper-button');
for (let i = 0; i < swiperButtons.length; i++) {
  button = swiperButtons[i];
  button.addEventListener('click', function() {
    let activeSlide = document.querySelector('.swiper-slide-active');
    let heroText = document.getElementsByClassName('hero-text');
    if (activeSlide.classList.contains('slide-2')) {
      document.body.style.background = '#69A9FF';
      heroText[1].classList.add('active');
      heroText[2].classList.remove('active');
      heroText[0].classList.remove('active');
    } else if (activeSlide.classList.contains('slide-3')) {
      document.body.style.background = '#FCC850';
      heroText[2].classList.add('active');
      heroText[1].classList.remove('active');
      heroText[0].classList.remove('active');
    } else {
      document.body.style.background = '#FEAFC3';
      heroText[0].classList.add('active');
      heroText[1].classList.remove('active');
      heroText[2].classList.remove('active');
    }
  });
}
