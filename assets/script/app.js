'use strict';

const mapBox = document.getElementById('map');
const find = document.querySelector('.find-you');
let userLatitude = 40;
let userLongitude = -74.5;

mapboxgl.accessToken = 'pk.eyJ1IjoiY2hhc2Vzd2VkbG8iLCJhIjoiY2x1cmlwenlmMDFzNjJxbW9jcjF4eHNreSJ9.vHG-jnm9uU-wInuQjToVQw';
const map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v12',
	center: [userLongitude, userLatitude],
	zoom: 7
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
    map.jumpTo({
        center: [userLongitude, userLatitude],
        zoom: 14.5,
        pitch: 55
    });
    map.setPitch(20, {duration: 2000});
    new mapboxgl.Marker()
    .setLngLat([userLongitude, userLatitude])
    .addTo(map);
}

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