# UYKUN – Personal Web GIS Portfolio

This project was created for the GMT 458 – Web GIS course.

It is a personal portfolio website presenting my education, experience,
projects, technical skills and Web GIS applications.

The website was developed using HTML, CSS and JavaScript and includes
interactive web maps created with Leaflet and OpenLayers.

---

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Leaflet
- OpenLayers
- OpenStreetMap
- Git & GitHub

---

## Website Pages

### Home
The home page provides a short introduction about me, my academic
background and my main areas of interest.

### About & Experience
This page includes information about my education, technical skills,
experience and volunteering activities.

### Projects
This page presents my academic and technical projects together with
project descriptions, technologies and a project gallery.

### Web Maps
This page contains interactive Web GIS applications created using
Leaflet and OpenLayers.

---

## Web GIS Implementation

### Leaflet

Leaflet was used to create an interactive map showing important
locations from my personal and academic journey.

The map includes:

- Interactive markers
- Location information
- Image galleries
- Map navigation
- Coordinate display
- Zoom-based marker visibility

### Marker Overlap Solution

When several markers are displayed at low zoom levels, they may overlap
and make the map difficult to read.

To solve this problem, I implemented a zoom threshold.

Markers are hidden when the map zoom level is below 7 and become visible
when the user zooms to level 7 or higher.

This makes the map cleaner and easier to explore.

### Repeating World Solution

Web maps may repeat the world horizontally when the user zooms out.

In the Leaflet map, world repetition was prevented by disabling map
wrapping behavior.

This keeps the map focused on a single representation of the world.

### OpenLayers

A second interactive web map was created using the OpenLayers
JavaScript library.

This allowed me to practice working with another Web GIS library and
compare its structure with Leaflet.

---

## CSS and Responsive Design

CSS was used to create the visual design of the website.

The website includes responsive layouts, hover effects, transitions
and animations to improve the user experience on different screen
sizes.

The main color palette consists of purple and light purple tones.

---

## AI Usage

During the development of this project, I used AI as a support tool
for specific technical problems and debugging.

In particular, AI helped me understand:

- How to control Leaflet marker visibility according to zoom level
- How to prevent repeated worlds in web maps
- How to integrate OpenLayers alongside Leaflet
- How to troubleshoot HTML, CSS and JavaScript problems
- How to improve responsive layouts
- How to organize and debug interactive map components

I reviewed, adapted and tested the suggested solutions before
integrating them into my project.

**Estimated total AI usage: approximately 4 hours.**

---

## Author

**Dilara Uykun**  
Hacettepe University  
Geomatics Engineering  
GMT 458 – Web GIS