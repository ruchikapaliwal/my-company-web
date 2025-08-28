 var cursor = document.querySelector(".cursor");
     var cursor2 = document.querySelector(".cursor2");
     document.addEventListener("mousemove",function(e){
cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
     })


      const swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  spaceBetween: 70,
  autoplay: true,
  loop: true,
 
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
   
    1024: {
      slidesPerView: 3
    },
 
    768: {
      slidesPerView: 2
    },
 
    0: {
      slidesPerView: 1
    }
  }
});

 var swiper2 = new Swiper(".mySwipers", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }
  });