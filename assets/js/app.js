var swiper = new Swiper(".mySwiper", {
   autoplay: {
    delay: 3500},
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
      200:{
        slidesPerView:1,
        slideToClickedSlide: true,
      },
      320: {
        slidesPerView:1,
        slidesPerGroup: 1,
        // spaceBetween: 0,
        slideToClickedSlide: true,
    },
       500: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 0,
       slideToClickedSlide: true,
     },
     750: {
        slidesPerView: 3,
        spaceBetween: 0,
        slideToClickedSlide: true,
    },
      960: {
          slidesPerView: 4,
          // spaceBetween: 0,
          slideToClickedSlide: true,
      },
      1050: {
        slidesPerView:4,
        // spaceBetween: 0,
        slideToClickedSlide: true,
    },          
      1320: {
          slidesPerView: 5,
          // spaceBetween: 0,
          slideToClickedSlide: true,
      },
       1440: {
       slidesPerView: 6,
       spaceBetween: 0,
      slideToClickedSlide: true,
     }
  }
  });

  let isMobile = {
    Android: function() {return navigator.userAgent.match(/Android/i);},
    BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
    iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
    Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
    Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
    any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
  };
      let body=document.querySelector('body');
  if(isMobile.any()){
      body.classList.add('touch');
      let arrow=document.querySelectorAll('.arrow');
    for(i=0; i<arrow.length; i++){
        let thisLink=arrow[i].previousElementSibling;
        let subMenu=arrow[i].nextElementSibling;
        let thisArrow=arrow[i];
  
        thisLink.classList.add('parent');
      arrow[i].addEventListener('click', function(){
        subMenu.classList.toggle('open');
        thisArrow.classList.toggle('active');
      });
    }
  }else{
    body.classList.add('mouse');
  }
  