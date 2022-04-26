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