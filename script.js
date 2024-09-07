const apiKey = '1acdfc8a05d682218c14c60c826b5fcf'; // Replace with your OpenWeatherMap API key

async function getWeather() {
    const city = document.getElementById('cityInput').value;
    if (!city) {
        alert('Please enter a city name');
        return;
    }
    
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        alert(error.message);
    }
}

function displayWeather(data) {
    document.getElementById('cityName').innerText = data.name;
    document.getElementById('temperature').innerText = `Temperature: ${data.main.temp} °C`;
    document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity} %`;
    document.getElementById('visibility').innerText = `Visibility: ${data.visibility / 1000} km`;
    document.getElementById('windSpeed').innerText = `Wind Speed: ${data.wind.speed} m/s`;
}
