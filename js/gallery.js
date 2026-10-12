/* =========================================================
   PROJECT GALLERY
========================================================= */

let currentSlideIndex = 0;


/* GET ALL SLIDES AND DOTS */

const slides = document.querySelectorAll(".gallery-slide");

const dots = document.querySelectorAll(".gallery-dot");


/* =========================================================
   SHOW SLIDE
========================================================= */

function showSlide(index) {

    /* IF WE PASS THE LAST PHOTO,
       RETURN TO THE FIRST PHOTO */

    if (index >= slides.length) {

        currentSlideIndex = 0;

    }


    /* IF WE GO BACK FROM THE FIRST PHOTO,
       GO TO THE LAST PHOTO */

    else if (index < 0) {

        currentSlideIndex = slides.length - 1;

    }


    /* NORMAL SLIDE */

    else {

        currentSlideIndex = index;

    }


    /* HIDE ALL SLIDES */

    slides.forEach(function(slide) {

        slide.classList.remove("active-slide");

    });


    /* REMOVE ACTIVE DOT */

    dots.forEach(function(dot) {

        dot.classList.remove("active-dot");

    });


    /* SHOW CURRENT SLIDE */

    slides[currentSlideIndex].classList.add("active-slide");


    /* ACTIVATE CURRENT DOT */

    dots[currentSlideIndex].classList.add("active-dot");

}


/* =========================================================
   NEXT / PREVIOUS
========================================================= */

function changeSlide(direction) {

    showSlide(currentSlideIndex + direction);

}


/* =========================================================
   DOT CLICK
========================================================= */

function currentSlide(index) {

    showSlide(index);

}