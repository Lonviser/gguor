var swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 15,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView:1,
        // spaceBetween: 0,
        slideToClickedSlide: true,
    },
       425: {
        slidesPerView: 2,
        spaceBetween: 0,
       slideToClickedSlide: true,
     },
     570: {
        slidesPerView: 3,
        spaceBetween: 20,
        slideToClickedSlide: true,
    },
      1050: {
          slidesPerView:5,
          // spaceBetween: 0,
          slideToClickedSlide: true,
      },
      // when window width is >= 480px
      960: {
          slidesPerView: 4,
          // spaceBetween: 0,
          slideToClickedSlide: true,
      },          
      1320: {
          slidesPerView: 6,
          // spaceBetween: 0,
          slideToClickedSlide: true,
      },
    //   1440: {
    //     slidesPerView: 4,
    //     // spaceBetween: 0,
    //     slideToClickedSlide: true,
    // }
  }
  });

  const partners = new Swiper('.s-partners', {
    slidesPerView: 4,
    spaceBetween: 10,
    freeMode: true,
    loop: true,   

  // Navigation arrows
  navigation: {
    nextEl: '.partners__next',
    prevEl: '.partners__prev',
  },

  breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView:1,
          // spaceBetween: 0,
          slideToClickedSlide: true,
      },
      //   425: {
      //     slidesPerView: 2,
      //     // spaceBetween: 0,
      //     slideToClickedSlide: true,
      // },
      // 570: {
      //   slidesPerView: 3,
      //   // spaceBetween: 0,
      //   slideToClickedSlide: true,
      // },
        620: {
            slidesPerView:2,
            // spaceBetween: 0,
            slideToClickedSlide: true,
        },
        // when window width is >= 480px
        960: {
            slidesPerView: 3,
            // spaceBetween: 0,
            slideToClickedSlide: true,
        },          
        1320: {
            slidesPerView: 4,
            // spaceBetween: 0,
            slideToClickedSlide: true,
        },
      //   1440: {
      //     slidesPerView: 4,
      //     // spaceBetween: 0,
      //     slideToClickedSlide: true,
      // }
    }
}); 

