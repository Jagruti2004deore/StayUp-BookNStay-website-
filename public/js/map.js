mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [listing.geometry.coordinates[0], listing.geometry.coordinates[1]], // [lng, lat]
    zoom: 10
});

new mapboxgl.Marker()
  .setLngLat([listing.geometry.coordinates[0], listing.geometry.coordinates[1]])
  .addTo(map);