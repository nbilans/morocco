function fetchWeather() {
    var city = document.getElementById("city").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9fd7a449d055dba26a982a3220f32aa2`)
    .then(response => response.json())
    .then((data) => {
        console.log(data); //output the API into console.
        console.log("City temp:" + data.main.temp)

        var celcius = (data.main.temp - 273.15).toFixed(1);
        console.log("City celcius:" + celcius + "celcius")

        console.log("City wind:" + data.wind.speed)

        document.getElementById("display").innerHTML = "Temperature (C): " + celcius + " celcius <br>" + "Wind Speed: " + data.wind.speed + " km/h" + "<br>" + "Longitude: " + data.coord.lon + "<br>" + "Lattitude: " + data.coord.lat + "<br>" + "Weather: " + data.weather[0].main;

    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });
}