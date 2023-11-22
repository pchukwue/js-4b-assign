document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const userName = document.getElementById('userName').value;
    const userLocation = document.getElementById('userLocation').value;
  
    // Fetch weather information from OpenWeatherMap API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userLocation}&appid=e65ea323f794ac2cae0bc9942945e90b`)
      .then(response => response.json())
      .then(weatherData => {
        // Display weather information
        const weatherInfoDiv = document.getElementById('weatherInfo');
        weatherInfoDiv.innerHTML = `
          <h2>Weather in ${userLocation}</h2>
          <p>Temperature: ${weatherData.main.temp}°C</p>
          <p>Description: ${weatherData.weather[0].description}</p>
        `;
  
        // Fetch country information from REST Countries API
        fetch(`https://restcountries.com/v3.1/name/${userLocation}`)
          .then(response => response.json())
          .then(countryData => {
            // Display country information
            const countryInfoDiv = document.getElementById('countryInfo');
            countryInfoDiv.innerHTML = `
              <h2>${countryData[0].name.common}</h2>
              <p>Capital: ${countryData[0].capital}</p>
              <p>Population: ${countryData[0].population}</p>
              <!-- Add more country details as needed -->
            `;
          })
          .catch(error => console.error('Error fetching country data:', error));
      })
      .catch(error => console.error('Error fetching weather data:', error));
  });



