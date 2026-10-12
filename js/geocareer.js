/* =========================================================
   GEOCAREER GALLERY
========================================================= */

let geoCareerSlideIndex = 0;


/* GET SLIDES */

const geoCareerSlides =
    document.querySelectorAll(".geocareer-gallery-slide");

const geoCareerDots =
    document.querySelectorAll(".geocareer-gallery-dot");


/* =========================================================
   SHOW SLIDE
========================================================= */

function showGeoCareerSlide(index) {

    /* LAST PHOTO → FIRST PHOTO */

    if (index >= geoCareerSlides.length) {

        geoCareerSlideIndex = 0;

    }


    /* FIRST PHOTO → LAST PHOTO */

    else if (index < 0) {

        geoCareerSlideIndex =
            geoCareerSlides.length - 1;

    }


    else {

        geoCareerSlideIndex = index;

    }


    /* HIDE ALL PHOTOS */

    geoCareerSlides.forEach(function(slide) {

        slide.classList.remove(
            "active-geocareer-slide"
        );

    });


    /* REMOVE ACTIVE DOT */

    geoCareerDots.forEach(function(dot) {

        dot.classList.remove(
            "active-geocareer-dot"
        );

    });


    /* SHOW CURRENT PHOTO */

    geoCareerSlides[
        geoCareerSlideIndex
    ].classList.add(
        "active-geocareer-slide"
    );


    /* ACTIVATE CURRENT DOT */

    geoCareerDots[
        geoCareerSlideIndex
    ].classList.add(
        "active-geocareer-dot"
    );

}


/* =========================================================
   NEXT / PREVIOUS
========================================================= */

function changeGeoCareerSlide(direction) {

    showGeoCareerSlide(
        geoCareerSlideIndex + direction
    );

}


/* =========================================================
   DOT CLICK
========================================================= */

function currentGeoCareerSlide(index) {

    showGeoCareerSlide(index);

}