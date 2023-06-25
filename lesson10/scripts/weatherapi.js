const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const apiKey = 'f99c062ee4493b70a5d7d7e818441f63';
async function getWeatherData() {
    const cityName = 'Holly Springs';
    const stateCode = 'NC';
    
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${stateCode},US&appid=${apiKey}&units=metric`;
    
    try {
      const response = await fetch(apiUrl);
      
      if (response.ok) {
        const data = await response.json();
        
        const airTemperature = data.main.temp;
        const windSpeed = data.wind.speed;
        const conditionIcon = data.weather[0].icon;
        const iconsrc = `https://openweathermap.org/img/w/${conditionIcon}.png`;
        displayResults(airTemperature,iconsrc);
      } else {
        console.log('Error:', response.status);
      }
    } catch (error) {
      console.log('Error:', error.message);
    }
  }

function displayResults(temp,icon) {
  currentTemp.innerHTML = `<strong>${temp.toFixed(
    0
  )}</strong>`;
  weatherIcon.src=icon;
  console.log(icon);
}

getWeatherData();

  
