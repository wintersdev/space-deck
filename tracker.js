// Generate map using Leaflet.js and OpenStreetMaps
const map = L.map('map').setView([0, 0], 1);
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, {attribution})
tiles.addTo(map);

// Change location marker to picture of ISS
const icon = L.icon({
  iconUrl: './iss.png',
  iconSize: [50, 32],
  iconAnchor: [25, 16]
});
const marker = L.marker([0, 0], { icon: icon}).addTo(map);
const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';

async function getISS() {
  // Fetch data from WTIA API
  const response = await fetch(api_url);
  const data = await response.json();
  const {latitude, longitude, altitude, velocity, visibility} = data;
  marker.setLatLng([latitude, longitude]);
  // Update DOM elements with data and update map
  document.getElementById('latitude').textContent = latitude;
  document.getElementById('longitude').textContent = longitude;
  document.getElementById('altitude').textContent = altitude;
  document.getElementById('velocity').textContent = velocity;
  if(visibility == "daylight"){
    document.getElementById('visibility').textContent = 'daylight';
  } else if(visibility == "eclipsed"){
    document.getElementById('visibility').textContent = 'Earth\'s shadow'
  } else {
    document.getElementById('visibility').textContent = visibility;
  }
  
}
// Add day/night layer to map
L.terminator().addTo(map)

// Fetch data every 1 second
getISS();
setInterval(getISS, 1000);