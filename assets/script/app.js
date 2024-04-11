'use strict';

const mapBox = document.getElementById('map');
const find = document.querySelector('.find-you');
const searchBar = document.querySelector('.search-bar');
const searchButton = document.querySelector('.search');
let userLatitude = 40.758896;
let userLongitude = -73.985130;
let mark = '';
mapboxgl.accessToken = 'pk.eyJ1IjoiY2hhc2Vzd2VkbG8iLCJhIjoiY2x1cmlwenlmMDFzNjJxbW9jcjF4eHNreSJ9.vHG-jnm9uU-wInuQjToVQw';
const map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v12',
	center: [userLongitude, userLatitude],
    zoom: 16,
    pitch: 55
});

function getLocation(position) {
    let { latitude, longitude } = position.coords;
    userLatitude = latitude;
    userLongitude = longitude;
    buildMap();
}

function errorHandler() {
    console.log('Unable to retrive your location')
}

const options = {
    enableHighAccuracy: true
}

function buildMap() {
    map.flyTo({
        center: [userLongitude, userLatitude],
        speed: 2, 
        curve: 1, 
        essential: true
    });
    document.querySelectorAll('.mapboxgl-marker').forEach(marker => marker.remove());
    mark = new mapboxgl.Marker()
    .setLngLat([userLongitude, userLatitude])
    .addTo(map);
}

searchButton.addEventListener("click", () => {
    searchBar.value = '';
});

find.addEventListener("click", () => {
    if('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
            getLocation, 
            errorHandler, 
            options
        )
    }
    else {
        console.log('GeoLocation is not supported by your browser');
    }
});