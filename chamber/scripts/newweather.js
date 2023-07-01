
const weatherIcon = document.querySelector("#weather-icon");


const apiKey = 'f99c062ee4493b70a5d7d7e818441f63';
async function getWeatherData() {
    const city = 'Red Rock, New Mexico';
    
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    
    try {
      const response = await fetch(apiUrl);
      
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        const airTemperature = data.main.temp;
        const windSpeed = data.wind.speed;
        const conditionIcon = data.weather[0].icon;
        const windchill = getwindChill(airTemperature, windSpeed);
        console.log(windchill);
        const iconsrc = `https://openweathermap.org/img/w/${conditionIcon}.png`;
        const airTemp = Math.round(airTemperature);
        displayResults(conditionIcon,airTemp,windchill);
      } else {
        console.log('Error:', response.status);
      }
    } catch (error) {
      console.log('Error:', error.message);
    }
  }

  function getwindChill(tempF, speed) {
    
    let windchill = Math.round(35.74 + 0.6215 * tempF - 35.75 * speed ** 0.16 + 0.428 * speed ** 0.16);
    console.log(windchill);
    return windchill;
}


function displayResults(conditionIcon,airTemperature,windchill) {
    document.getElementById("degrees").innerHTML = "Temperature = " + airTemperature + "\u00B0 F";
    document.getElementById("windchill").innerHTML = "Wind Chill = " + windchill + "\u00B0 F";
    console.log(conditionIcon);
}

getWeatherData();

  
