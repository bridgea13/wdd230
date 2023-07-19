const weatherIcon = document.querySelector("#weather-icon");

const apiKey = 'f99c062ee4493b70a5d7d7e818441f63';
async function getWeatherData() {
    const city = 'Carlsbad, California';

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    try {
        const response = await fetch(apiUrl);

        if (response.ok) {
            const data = await response.json();

            const airTemperature = data.main.temp;
            const windSpeed = data.wind.speed;
            const conditionIcon = data.weather[0].icon;
            const windchill = getwindChill(airTemperature, windSpeed);

            const iconsrc = `https://openweathermap.org/img/w/${conditionIcon}.png`;
            const airTemp = Math.round(airTemperature);
            const humidity = data.main.humidity;
            
            displayResults(conditionIcon, airTemp, windchill, humidity);
        } else {
            console.log('Error:', response.status);
        }
    } catch (error) {
        console.log('Error:', error.message);
    }
}

function getwindChill(tempF, speed) {

    let windchill = Math.round(35.74 + 0.6215 * tempF - 35.75 * speed ** 0.16 + 0.428 * speed ** 0.16);

    return windchill;
}


function displayResults(conditionIcon, airTemperature, windchill, humidity) {
    document.getElementById("degrees").innerHTML = "Temperature = " + airTemperature + "\u00B0 F";
    document.getElementById("windchill").innerHTML = "Wind Chill = " + windchill + "\u00B0 F";
    document.getElementById("humidity").innerHTML = "Humidity = " + humidity + "%";
    
}

getWeatherData();
async function getForecast() {
    forcastSpot = document.getElementById('forecast');
    let forecast_response = await fetch('https://api.openweathermap.org/data/2.5/forecast?lat=33.1581&lon=-117.3506&appid=f99c062ee4493b70a5d7d7e818441f63&units=imperial');
    const data = await forecast_response.json();
    for (let i=0; i<3; i++){
    const temp = data.list[i].main.temp;
    
    const timestamp = data.list[i].dt;
    const date = new Date(timestamp * 1000);
    const formattedDate = date.toDateString();
    const tempP = document.createElement('p');
    tempP.textContent=temp.toString()+ "\u00B0 F";
    const dateP = document.createElement('p');
    dateP.textContent=formattedDate;
    
    forcastSpot.appendChild(dateP);
    forcastSpot.appendChild(tempP );
    }
}

getForecast();
