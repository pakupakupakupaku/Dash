document.getElementById('calendar').innerText = "Calendar events go here";
document.getElementById('photos').innerText = "Google Photos gallery goes here";
document.getElementById('weather').innerText = "Weather data goes here";
document.getElementById('ecobee').innerText = "Ecobee widget goes here";
document.getElementById('govee').innerText = "Govee widget goes here";
async function fetchWeather() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=YourCity&appid=YOUR_API_KEY');
    const data = await response.json();
    document.getElementById('weather').innerText = `${data.weather[0].description}, ${data.main.temp}°C`;
  }
  
  fetchWeather();
  