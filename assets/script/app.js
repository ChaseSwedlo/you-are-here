'use strict';

const mapBox = document.getElementById('map');

mapboxgl.accessToken = 'pk.eyJ1IjoiY2hhc2Vzd2VkbG8iLCJhIjoiY2x1cmlwenlmMDFzNjJxbW9jcjF4eHNreSJ9.vHG-jnm9uU-wInuQjToVQw';
const map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v12',
	center: [-74.5, 40],
	zoom: 9
});