"use strict";

// fixed navbar code ==================================
window.addEventListener("scroll", function () {
  let nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});

// mobile menu =======================================
function onClickmenu() {
  document.getElementById("mobile_menu").classList.toggle("icon");
  document.getElementById("nav").classList.toggle("change");
}

// skills section code ===============================
window.addEventListener("scroll", () => {
  const sectionPos = skillsSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight;
  if (sectionPos < screenPos) {
    showProgress();
  } else {
    hideProgress();
  }
});

// typed.js plugin start =============================
var typed = new Typed("#element", {
  strings: ["Designer", "Programmer", "Developer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

// this is filter button javascript =======================
let list = document.querySelectorAll(".list");

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    for (let j = 0; j < list.length; j++) {
      list[j].classList.remove("active");
    }
    this.classList.add("active");
  });
}

// this is mixitup plugin jQuery ===========================
$(document).ready(function () {
  var mixer = mixitup(".main-portfolio");
});

// simple lightbox jQuery plugin ==================================
$(".gallery a").simpleLightbox();
$(".gallery a").removeAttr("title");

// skills section code start ====================================
const skillsSection = document.getElementById("skills-section");
const progressBars = document.querySelectorAll(".progress_bar");

function showProgress() {
  progressBars.forEach((progressBar) => {
    const value = progressBar.dataset.progress;
    progressBar.style.opacity = 1;
    progressBar.style.width = `${value}%`;
  });
}
function hideProgress() {
  progressBars.forEach((p) => {
    p.style.opacity = 0;
    p.style.width = 0;
  });
}

// testimonial slick slider ======================================
$(document).ready(function () {
  $(".testimonial_slider").slick({
    autoplay: true,
    // arrows: true,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

// ################### scroll top start #####################
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      $(".fa-angle-up").css({
        opacity: "1",
        "pointer-events": "auto",
      });
    } else {
      $(".fa-angle-up").css({
        opacity: "0",
        "pointer-events": "none",
      });
    }
  });
  $(".fa-angle-up").click(function () {
    $("html").animate({ scrollTop: 0 }, 500);
  });
});
