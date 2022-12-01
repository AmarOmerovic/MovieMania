setTimeout(function() {
    document.getElementById("float").style.display ="none"
    document.querySelector('header').style.opacity = 1;
    document.body.style.overflowY = "scroll";


}, 2900);


history.scrollRestoration = 'manual';

if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}

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

let playButton = document.querySelector(".play-movie");
let video = document.querySelector(".video-container");
let close = document.querySelector(".close-video");

playButton.onclick = () => {
    video.classList.add("show-video");
    document.getElementById("myvideo").play();
};

close.onclick = () => {
    video.classList.remove("show-video");
    document.getElementById("myvideo").pause();
};
