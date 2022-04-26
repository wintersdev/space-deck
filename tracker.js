const map = L.map('map').setView([0, 0], 1);
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, {attribution})
tiles.addTo(map);
const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';

async function getISS() {
  const response = await fetch(api_url);
  const data = await response.json();
  const {latitude, longitude, altitude, velocity, visibility} = data;
  document.getElementById('latitude').textContent = latitude;
  document.getElementById('longitude').textContent = longitude;
  document.getElementById('altitude').textContent = altitude;
  document.getElementById('velocity').textContent = velocity;
  document.getElementById('visibility').textContent = visibility;
}

getISS();