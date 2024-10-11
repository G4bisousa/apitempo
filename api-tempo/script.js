const apiKey = '9d8689299f5410b53b3a676e6fe5b5bd'; // Substitua com sua chave da API OpenWeatherMap

document.getElementById('getWeatherBtn').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    if (city) {
        getWeather(city);
    }
});

async function getWeather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},uk&appid=${apiKey}&lang=pt&units=metric`);
    
    if (response.ok) {
        const data = await response.json();
        displayWeather(data);
    } else {
        document.getElementById('weatherResult').innerText = 'Cidade não encontrada!';
    }
}

function displayWeather(data) {
    const weatherDescription = data.weather[0].description;
    const temperature = data.main.temp;
    const humidity = data.main.humidity;

    document.getElementById('weatherResult').innerHTML = `
        <h2>${data.name}</h2>
        <p>Temperatura: ${temperature} °C</p>
        <p>Descrição: ${weatherDescription}</p>
        <p>Umidade: ${humidity}%</p>
    `;
}
