setTimeout(function() {
    document.body.style.overflowY = "scroll";
    document.getElementById("float").style.display ="none"
    document.querySelector('header').style.opacity = 1;

}, 2900);


/*history.scrollRestoration = 'manual';

if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}*/

var swiper = new Swiper(".popular-container", {
    slidesPerView: 1, 
    spaceBetween: 10,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        280: {
            slidesPerView: 1, 
            spaceBetween: 10,
        },
        320: {
            slidesPerView: 2, 
            spaceBetween: 10,
        },
        510: {
            slidesPerView: 2, 
            spaceBetween: 10,
        },
        758: {
            slidesPerView: 3, 
            spaceBetween: 15,
        },
        900: {
            slidesPerView: 4, 
            spaceBetween: 20,
        },
    }
  });

