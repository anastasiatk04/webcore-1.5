if (document.documentElement.clientWidth < 500) {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1.2,
    pagination: {
      el: '.swiper-pagination',
      clickable: true, 
    },
  });
} else {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 20,
    slidesPerView: 2,
    pagination: {
      el: '.swiper-pagination',
      clickable: true, 
    },
  });
}
function readMore() {
  if (document.querySelector('.hidden').style.display !== 'flex') {
      document.querySelector('.slider__big').style.gridAutoRows = '90px';
      document.querySelector('.visible').style.display = 'none';
      document.querySelector('.hidden').style.display = 'flex';
  } else {
      document.querySelector('.slider__big').style.gridAutoRows = '0';
      document.querySelector('.visible').style.display = 'flex';
      document.querySelector('.hidden').style.display = 'none';
  }
}

const sliderIcons = document.querySelectorAll(".slider__icon");

