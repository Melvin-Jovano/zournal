function toggleWeather() {
    $("#weatherReport").slideUp();
};

document.getElementById("findCity").addEventListener("keyup", () => {
    getWeatherType($("#findCity").val());
});

function getWeather(city) {
    $('#report').hide();
    fetch(
        'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=7af0d302a35a0d7c3e92d2fd4891888c'
    )
        .then(res => res.json())
        .then((data) => {
            $('#report').show();
            $("#weatherImg").attr("src", "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png");
            $("#description").html("\"" + data.weather[0].description + "\"");
            $("#weatherL").html(data.weather[0].description + "&emsp;" + data.main.temp + "&deg;C");
            $("#city").html(data.name);
            $("#country").html(data.sys.country);
            $("#temperature").html(data.main.temp + "&deg;C");
            $("#humidity").html(data.main.humidity + "%");
            $("#wind").html(data.wind.speed + " m/s");
            $("#status").html(data.weather[0].main);
            $("#pressure").html(data.main.pressure + " hPa");
        });
}

function getWeatherType(city) {
    fetch(
        'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=7af0d302a35a0d7c3e92d2fd4891888c'
    )
        .then(res => res.json())
        .then((data) => {
            $("#weatherImg").attr("src", "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png");
            $("#description").html("\"" + data.weather[0].description + "\"");
            $("#city").html(data.name);
            $("#country").html(data.sys.country);
            $("#temperature").html(data.main.temp + "&deg;C");
            $("#humidity").html(data.main.humidity + "%");
            $("#wind").html(data.wind.speed + " m/s");
            $("#status").html(data.weather[0].main);
            $("#pressure").html(data.main.pressure + " hPa");
        });
}