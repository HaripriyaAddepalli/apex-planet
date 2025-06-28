document.addEventListener('DOMContentLoaded', function() {
  const weatherContainer = document.getElementById('weather-data');
  const fetchBtn = document.getElementById('fetchWeatherBtn');
  
  fetchBtn.addEventListener('click', fetchWeather);
  
  function fetchWeather() {
    // Show loading state
    weatherContainer.innerHTML = '<p>Loading weather data...</p>';
    
    // Example using OpenWeatherMap API (you'll need your own API key)
    fetch('https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=YOUR_API_KEY')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response failed');
        }
        return response.json();
      })
      .then(data => {
        displayWeather(data);
      })
      .catch(error => {
        weatherContainer.innerHTML = `<p class="error">Error: ${error.message}</p>`;
      });
  }
  
  function displayWeather(data) {
    weatherContainer.innerHTML = `
      <h3>${data.name}, ${data.sys.country}</h3>
      <p class="temp">${Math.round(data.main.temp)}°C</p>
      <p>${data.weather[0].description}</p>
      <p>Humidity: ${data.main.humidity}%</p>
    `;
  }
});
