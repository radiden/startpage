let city = 'borek%20szlachecki';

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=50a34e070dd5c09a99554b57ab7ea7e2`, { method: 'GET'})
    .then(res  => res.json())
    .then(weatherdata => {
        let weatherElem = document.getElementById("weather");
        weatherElem.innerText = `it's ${Math.round(weatherdata.main.temp)} degrees, ${weatherdata.weather[0].description}`;
    })
    .catch(err => {
        console.warn('openweathermap says no: ' + err)
        let weatherElem = document.getElementById("weather")
        weatherElem.innerText = 'Error trying to fetch the weather'
    });