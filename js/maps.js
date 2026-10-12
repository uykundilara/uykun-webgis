/* =========================================================
   UYKUN PORTFOLIO
   INTERACTIVE WEB MAP
========================================================= */


/* =========================================================
   1. LOCATION DATA
========================================================= */

const locations = {

    ankara: {
        name: "Ankara",
        coordinates: [39.8672, 32.7346],
        zoom: 14,

        title: "Hacettepe University",
        subtitle: "Beytepe Campus · Ankara",

        description:
            "The city where I continue my university education in Geomatics Engineering.",

        images: [
            "images/ankara.jpg"
        ]
    },

    antalya: {
        name: "Antalya",
        coordinates: [36.8663, 30.6371],
        zoom: 13,

        title: "Antalya",
        subtitle: "Konyaaltı · Antalya",

        description:
            "My hometown and the city where my journey began.",

        images: [
            "images/antalya1.jpeg",
            "images/antalya2.jpeg",
            "images/antalya3.jpeg"
        ]
    },

    istanbul: {
        name: "Istanbul",
        coordinates: [40.9917, 29.0277],
        zoom: 13,

        title: "Istanbul",
        subtitle: "Kadıköy · Istanbul",

        description:
            "One of the cities that became part of my personal journey.",

        images: [
            "images/ist1.jpeg",
            "images/ist2.jpeg",
            "images/ist3.jpeg",
            "images/ist4.jpeg"
        ]
    },

    budapest: {
        name: "Budapest",
        coordinates: [47.4979, 19.0402],
        zoom: 13,

        title: "Budapest",
        subtitle: "Hungary",

        description:
            "A memorable destination in my journey.",

        images: [
            "images/buda1.jpeg",
            "images/buda2.jpeg",
            "images/buda3.jpeg",
            "images/buda4.jpeg",
            "images/buda5.jpeg",
            "images/buda6.jpeg",
            "images/buda7.jpeg"
        ]
    },

    bursa: {
        name: "Bursa",
        coordinates: [40.1950, 29.0600],
        zoom: 12,

        title: "Bursa",
        subtitle: "Türkiye",

        description:
            "Another meaningful stop in my journey.",

        images: [
            "images/bursa1.jpeg",
            "images/bursa2.jpeg",
            "images/bursa3.jpeg",
            "images/bursa4.jpeg"
        ]
    },

    lesvos: {
        name: "Lesvos",
        coordinates: [39.1080, 26.5550],
        zoom: 10,

        title: "Lesvos",
        subtitle: "Greece",

        description:
            "A memorable island destination in the Aegean Sea.",

        images: [
            "images/midilli1.jpeg",
            "images/midilli2.jpeg",
            "images/midilli3.jpeg"
        ]
    }

};

/* =========================================================
   PHOTO GALLERY POPUP
========================================================= */

function createGalleryPopup(locationKey, category) {

    const location = locations[locationKey];

    const galleryId = `gallery-${locationKey}`;

    const hasMultipleImages =
        location.images.length > 1;

    return `
        <div class="portfolio-popup photo-popup">

            <div class="map-gallery">

                <img
                    id="${galleryId}"
                    class="map-gallery-image"
                    src="${location.images[0]}"
                    alt="${location.name}"
                >

                ${
                    hasMultipleImages
                    ? `
                        <button
                            class="map-gallery-arrow map-gallery-prev"
                            onclick="changeMapPhoto('${locationKey}', -1)"
                            type="button"
                            aria-label="Previous photo"
                        >
                            &#10094;
                        </button>

                        <button
                            class="map-gallery-arrow map-gallery-next"
                            onclick="changeMapPhoto('${locationKey}', 1)"
                            type="button"
                            aria-label="Next photo"
                        >
                            &#10095;
                        </button>

                        <div
                            class="map-gallery-counter"
                            id="counter-${locationKey}"
                        >
                            1 / ${location.images.length}
                        </div>
                    `
                    : ""
                }

            </div>

            <div class="map-popup-content">

                <span class="popup-small-title">
                    ${category}
                </span>

                <h3>
                    ${location.title}
                </h3>

                <p class="popup-location">
                    ${location.subtitle}
                </p>

                <p class="popup-description">
                    ${location.description}
                </p>

            </div>

        </div>
    `;
}

const galleryIndexes = {
    ankara: 0,
    antalya: 0,
    istanbul: 0,
    budapest: 0,
    bursa: 0,
    lesvos: 0
};


function changeMapPhoto(locationKey, direction) {

    const location = locations[locationKey];

    galleryIndexes[locationKey] += direction;


    if (
        galleryIndexes[locationKey] >=
        location.images.length
    ) {
        galleryIndexes[locationKey] = 0;
    }


    if (
        galleryIndexes[locationKey] < 0
    ) {
        galleryIndexes[locationKey] =
            location.images.length - 1;
    }


    const image =
        document.getElementById(
            `gallery-${locationKey}`
        );


    const counter =
        document.getElementById(
            `counter-${locationKey}`
        );


    if (image) {

        image.src =
            location.images[
                galleryIndexes[locationKey]
            ];

    }


    if (counter) {

        counter.textContent =
            `${galleryIndexes[locationKey] + 1} / ${location.images.length}`;

    }
}

/* =========================================================
   2. CREATE MAP
========================================================= */

const portfolioMap = L.map("portfolioMap", {

    center: [41.5, 27.5],

    zoom: 5,

    minZoom: 3,

    maxZoom: 18,

    zoomControl: true,

    worldCopyJump: false

});


/* =========================================================
   3. BASE MAP
========================================================= */

L.tileLayer(
    "https://tile.openstreetmap.de/{z}/{x}/{y}.png",
    {
        attribution: "&copy; OpenStreetMap contributors",

        maxZoom: 18,

        noWrap: true
    }
).addTo(portfolioMap);


/* =========================================================
   4. CUSTOM PURPLE MARKER
========================================================= */

const purpleMarker = L.divIcon({

    className: "custom-map-marker",

    html: `
        <div class="custom-marker-pin">
            <div class="custom-marker-center"></div>
        </div>
    `,

    iconSize: [38, 48],

    iconAnchor: [19, 46],

    popupAnchor: [0, -43]

});


/* =========================================================
   5. ANKARA
========================================================= */

const ankaraMarker = L.marker(
    locations.ankara.coordinates,
    {
        icon: purpleMarker
    }
).addTo(portfolioMap);


ankaraMarker.bindPopup(
    createGalleryPopup(
        "ankara",
        "ACADEMIC LIFE"
    ),
    {
        maxWidth: 320,
        minWidth: 280
    }
);


/* =========================================================
   6. ANTALYA
========================================================= */

const antalyaMarker = L.marker(
    locations.antalya.coordinates,
    {
        icon: purpleMarker
    }
).addTo(portfolioMap);


antalyaMarker.bindPopup(
    createGalleryPopup(
        "antalya",
        "HOMETOWN"
    ),
    {
        maxWidth: 320,
        minWidth: 280
    }
);


/* =========================================================
   7. ISTANBUL / KADIKOY
========================================================= */

const istanbulMarker = L.marker(
    locations.istanbul.coordinates,
    {
        icon: purpleMarker
    }
).addTo(portfolioMap);


istanbulMarker.bindPopup(
    createGalleryPopup(
        "istanbul",
        "ISTANBUL"
    ),
    {
        maxWidth: 320,
        minWidth: 280
    }
);


/* =========================================================
   8. BUDAPEST
========================================================= */

const budapestMarker = L.marker(
    locations.budapest.coordinates,
    {
        icon: purpleMarker
    }
).addTo(portfolioMap);


budapestMarker.bindPopup(
    createGalleryPopup(
        "budapest",
        "TRAVEL"
    ),
    {
        maxWidth: 320,
        minWidth: 280
    }
);

/* =========================================================
   BURSA
========================================================= */

const bursaMarker = L.marker(
    locations.bursa.coordinates,
    {
        icon: purpleMarker
    }
).addTo(portfolioMap);

bursaMarker.bindPopup(
    createGalleryPopup(
        "bursa",
        "BURSA"
    ),
    {
        maxWidth: 320,
        minWidth: 280
    }
);


/* =========================================================
   LESVOS
========================================================= */

const lesvosMarker = L.marker(
    locations.lesvos.coordinates,
    {
        icon: purpleMarker
    }
).addTo(portfolioMap);

lesvosMarker.bindPopup(
    createGalleryPopup(
        "lesvos",
        "TRAVEL"
    ),
    {
        maxWidth: 320,
        minWidth: 280
    }
);

/* =========================================================
   9. SHOW ALL LOCATIONS
========================================================= */

const journeyBounds = L.latLngBounds([

    locations.ankara.coordinates,
    locations.antalya.coordinates,
    locations.istanbul.coordinates,
    locations.budapest.coordinates,
    locations.bursa.coordinates,
    locations.lesvos.coordinates

]);


portfolioMap.fitBounds(
    journeyBounds,
    {
        padding: [70, 70]
    }
);


/* =========================================================
   10. GET LOCATION BUTTONS
========================================================= */

const ankaraButton =
    document.getElementById("goAnkara");

const antalyaButton =
    document.getElementById("goAntalya");

const istanbulButton =
    document.getElementById("goIstanbul");

const budapestButton =
    document.getElementById("goBudapest");

const bursaButton =
    document.getElementById("goBursa");

const lesvosButton =
    document.getElementById("goLesvos");

const viewAllButton =
    document.getElementById("showTurkey");


/* =========================================================
   11. ANKARA BUTTON
========================================================= */

ankaraButton.addEventListener(
    "click",
    function () {

        portfolioMap.flyTo(
            locations.ankara.coordinates,
            locations.ankara.zoom,
            {
                duration: 1.5
            }
        );

        setTimeout(
            function () {

                ankaraMarker.openPopup();

            },
            1200
        );

        setActiveLocation(
            ankaraButton
        );

    }
);


/* =========================================================
   12. ANTALYA BUTTON
========================================================= */

antalyaButton.addEventListener(
    "click",
    function () {

        portfolioMap.flyTo(
            locations.antalya.coordinates,
            locations.antalya.zoom,
            {
                duration: 1.5
            }
        );

        setTimeout(
            function () {

                antalyaMarker.openPopup();

            },
            1200
        );

        setActiveLocation(
            antalyaButton
        );

    }
);


/* =========================================================
   13. ISTANBUL BUTTON
========================================================= */

istanbulButton.addEventListener(
    "click",
    function () {

        portfolioMap.flyTo(
            locations.istanbul.coordinates,
            locations.istanbul.zoom,
            {
                duration: 1.5
            }
        );

        setTimeout(
            function () {

                istanbulMarker.openPopup();

            },
            1200
        );

        setActiveLocation(
            istanbulButton
        );

    }
);


/* =========================================================
   14. BUDAPEST BUTTON
========================================================= */

budapestButton.addEventListener(
    "click",
    function () {

        portfolioMap.flyTo(
            locations.budapest.coordinates,
            locations.budapest.zoom,
            {
                duration: 1.5
            }
        );

        setTimeout(
            function () {

                budapestMarker.openPopup();

            },
            1200
        );

        setActiveLocation(
            budapestButton
        );

    }
);

/* =========================================================
   BURSA BUTTON
========================================================= */

bursaButton.addEventListener(
    "click",
    function () {

        portfolioMap.flyTo(
            locations.bursa.coordinates,
            locations.bursa.zoom,
            {
                duration: 1.5
            }
        );

        setTimeout(
            function () {
                bursaMarker.openPopup();
            },
            1200
        );

        setActiveLocation(
            bursaButton
        );

    }
);


/* =========================================================
   LESVOS BUTTON
========================================================= */

lesvosButton.addEventListener(
    "click",
    function () {

        portfolioMap.flyTo(
            locations.lesvos.coordinates,
            locations.lesvos.zoom,
            {
                duration: 1.5
            }
        );

        setTimeout(
            function () {
                lesvosMarker.openPopup();
            },
            1200
        );

        setActiveLocation(
            lesvosButton
        );

    }
);

/* =========================================================
   15. VIEW ALL LOCATIONS
========================================================= */

viewAllButton.addEventListener(
    "click",
    function () {

        portfolioMap.closePopup();

        portfolioMap.flyToBounds(
            journeyBounds,
            {
                padding: [70, 70],

                duration: 1.5
            }
        );

        removeActiveLocations();

    }
);


/* =========================================================
   16. ACTIVE LOCATION CARD
========================================================= */

function setActiveLocation(button) {

    removeActiveLocations();

    button.classList.add(
        "active-location"
    );

}


function removeActiveLocations() {

    document
        .querySelectorAll(
            ".webmap-location-card"
        )
        .forEach(
            function (button) {

                button.classList.remove(
                    "active-location"
                );

            }
        );

}


/* =========================================================
   17. CLICK MAP → SHOW COORDINATES
========================================================= */

const coordinateDisplay =
    document.getElementById(
        "coordinateDisplay"
    );


let coordinateMarker = null;


portfolioMap.on(
    "click",
    function (event) {

        const latitude =
            event.latlng.lat.toFixed(5);

        const longitude =
            event.latlng.lng.toFixed(5);


        coordinateDisplay.innerHTML = `

            <strong>Latitude:</strong>
            ${latitude}

            <br>

            <strong>Longitude:</strong>
            ${longitude}

        `;


        if (coordinateMarker) {

            portfolioMap.removeLayer(
                coordinateMarker
            );

        }


        coordinateMarker =
            L.circleMarker(
                event.latlng,
                {

                    radius: 7,

                    color: "#641863",

                    weight: 3,

                    fillColor: "#D9B9E2",

                    fillOpacity: 1

                }
            ).addTo(portfolioMap);

    }
);


/* =========================================================
   18. MARKER CLICK → ACTIVE CARD
========================================================= */

ankaraMarker.on(
    "click",
    function () {

        setActiveLocation(
            ankaraButton
        );

    }
);


antalyaMarker.on(
    "click",
    function () {

        setActiveLocation(
            antalyaButton
        );

    }
);


istanbulMarker.on(
    "click",
    function () {

        setActiveLocation(
            istanbulButton
        );

    }
);


budapestMarker.on(
    "click",
    function () {

        setActiveLocation(
            budapestButton
        );

    }
);

/* BURSA MARKER CLICK */

bursaMarker.on(
    "click",
    function () {

        setActiveLocation(
            bursaButton
        );

    }
);


/* LESVOS MARKER CLICK */

lesvosMarker.on(
    "click",
    function () {

        setActiveLocation(
            lesvosButton
        );

    }
);

/* =========================================================
   19. FIX MAP SIZE
========================================================= */

window.addEventListener(
    "load",
    function () {

        setTimeout(
            function () {

                portfolioMap.invalidateSize();

            },
            200
        );

    }
);

/* =========================================================
   20. OPENLAYERS MAP
========================================================= */

const openlayersMap = new ol.Map({

    target: "openlayersMap",

    layers: [

        new ol.layer.Tile({

            source: new ol.source.XYZ({

                url:
                    "https://tile.openstreetmap.de/{z}/{x}/{y}.png",

                wrapX: false,

                attributions:
                    "&copy; OpenStreetMap contributors"

            })

        })

    ],

    view: new ol.View({

        center: ol.proj.fromLonLat([
            32.8597,
            39.9334
        ]),

        zoom: 5,

        minZoom: 3,

        maxZoom: 18,

        multiWorld: false

    })

});

// ======================================================
// OPENLAYERS - JOURNEY PINS
// ======================================================

const olLocations = [
    {
        name: "Ankara",
        coords: [32.7346, 39.8672]
    },
    {
        name: "Antalya",
        coords: [30.6371, 36.8663]
    },
    {
        name: "Istanbul",
        coords: [29.0277, 40.9917]
    },
    {
        name: "Budapest",
        coords: [19.0402, 47.4979]
    },
    {
        name: "Bursa",
        coords: [29.0600, 40.1950]
    },
    {
        name: "Lesvos",
        coords: [26.5550, 39.1080]
    }
];


// Her şehir için pin oluştur
const olMarkerFeatures = olLocations.map(function(location) {

    const marker = new ol.Feature({
        geometry: new ol.geom.Point(
            ol.proj.fromLonLat(location.coords)
        ),
        name: location.name
    });

    marker.setStyle(
        new ol.style.Style({

            text: new ol.style.Text({
                text: "📍",
                font: "30px Arial",

                offsetY: -15
            })

        })
    );

    return marker;
});


// Marker source
const olMarkerSource = new ol.source.Vector({
    features: olMarkerFeatures,
    wrapX: false
});


// Marker layer
const olMarkerLayer = new ol.layer.Vector({
    source: olMarkerSource
});


// Markerları OpenLayers haritasına ekle
openlayersMap.addLayer(olMarkerLayer);
 
/* =========================================================
   MARKER ZOOM THRESHOLD
   Markers are visible only after zoom level 7
========================================================= */

const journeyMarkers = [
    ankaraMarker,
    antalyaMarker,
    istanbulMarker,
    budapestMarker,
    bursaMarker,
    lesvosMarker
];

const markerZoomThreshold = 4;

function updateMarkerVisibility() {

    const currentZoom = portfolioMap.getZoom();

    journeyMarkers.forEach(function (marker) {

        if (currentZoom >= markerZoomThreshold) {

            if (!portfolioMap.hasLayer(marker)) {
                marker.addTo(portfolioMap);
            }

        } else {

            if (portfolioMap.hasLayer(marker)) {
                portfolioMap.removeLayer(marker);
            }

        }

    });
}


/* Check markers whenever zoom changes */
portfolioMap.on(
    "zoomend",
    updateMarkerVisibility
);


/* Check markers when page first loads */
updateMarkerVisibility();