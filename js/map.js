// =====================================
// UYKUN - HOME PAGE LEAFLET MAP
// =====================================


// CREATE MAP

const homeMap = L.map("homeMap", {
    center: [38.5, 31.5],
    zoom: 6,

    minZoom: 5,
    maxZoom: 18,

    worldCopyJump: false
});


// =====================================
// BASE MAP
// =====================================

L.tileLayer(
    "https://tile.openstreetmap.de/{z}/{x}/{y}.png",
    {
        attribution: "&copy; OpenStreetMap contributors",
        maxZoom: 18,
        noWrap: true
    }
).addTo(homeMap);


// =====================================
// HACETTEPE UNIVERSITY - BEYTEPE CAMPUS
// =====================================

const hacettepeMarker = L.marker([
    39.8672,
    32.7346
]).addTo(homeMap);

hacettepeMarker.bindPopup(`
    <strong>Hacettepe University</strong><br>
    Beytepe Campus<br>
    Ankara
`);


// =====================================
// KONYAALTI - ANTALYA
// =====================================

const konyaaltiMarker = L.marker([
    36.8663,
    30.6371
]).addTo(homeMap);

konyaaltiMarker.bindPopup(`
    <strong>Konyaaltı</strong><br>
    Antalya
`);


// =====================================
// SHOW BOTH LOCATIONS
// =====================================

const locationBounds = L.latLngBounds([
    [39.8672, 32.7346],
    [36.8663, 30.6371]
]);

homeMap.fitBounds(locationBounds, {
    padding: [80, 80]
});


// =====================================
// LIMIT MAP TO TURKEY
// =====================================

const turkeyBounds = L.latLngBounds(
    [35.5, 25.0],
    [42.5, 45.0]
);

homeMap.setMaxBounds(turkeyBounds);