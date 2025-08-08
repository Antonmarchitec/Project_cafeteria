const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: false,

    //slidesPerView: 1,
    //spaceBetween: 10,
    //slidesPerGroup: 1,
    //loop: true,
    //loopFillGroupWithBlank: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        //clickable: true,
    },

    // Navigation arrows
    navigation: {
        //nextEl: '.swiper-button-next',
        //prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      479: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      680: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      720: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      980: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    } 
  
});

