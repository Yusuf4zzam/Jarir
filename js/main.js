// ------------------------------ Start The Header Search Box Function ------------------------------ //
const searchBox = document.querySelector("header .search-box input");
const searchResultsBox = document.querySelector(
  "header .search-box .result-box"
);
const searchResultsCloseBtn = document.querySelector(
  "header .search-box .result-box .close-btn"
);

searchBox.addEventListener("focus", () => {
  searchResultsBox.style.display = "block";
});

searchResultsCloseBtn.addEventListener("click", () => {
  searchResultsBox.style.display = "none";
});

// ------------------------------ Start Burger Icon On Click Function ------------------------------ //
const burgerBtn = document.querySelector("header .toggle-burger-icon");
const asideBar = document.querySelector("aside");
const asideCloseBtn = document.querySelector("aside .close-btn-toggler");

burgerBtn.addEventListener("click", () => {
  asideBar.style.right = "0";
});

asideCloseBtn.addEventListener("click", () => {
  asideBar.style.right = "-100%";
});

window.addEventListener("keyup", (e) => {
  if (e.key == "Escape") {
    asideBar.style.right = "-100%";
  }
});

// ------------------------------ Start Swipers Boxes ------------------------------ //
let sliderSwiper = new Swiper(".slider .mySwiper", {
  navigation: {
    nextEl: ".slider .swiper-button-next",
    prevEl: ".slider .swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});

let catgoriesSlider = new Swiper(".catgories .mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 10,
      spaceBetween: 20,
    },
  },
});

let bannerSlider = new Swiper(".banner-box .mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

let ProductsSwiper = new Swiper(".products .mySwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  navigation: {
    nextEl: ".products .swiper-button-next",
    prevEl: ".products .swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});

// ------------------------------ Start scroll to top buton ------------------------------ //
const scrollToTopBtn = document.querySelectorAll(".scroll-to-top");

scrollToTopBtn.forEach((e) => {
  e.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
});

const scrollToTopFlowBtn = document.querySelector(".scroll-to-top.flow");

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    scrollToTopFlowBtn.classList.add("active");
  } else {
    scrollToTopFlowBtn.classList.remove("active");
  }
});
