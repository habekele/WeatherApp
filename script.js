let weather;

function callWeather(cityId){
    var key = "e95e68d847cae52c53bf55dcca4d43b4"
    var cityId = "5368361"
    fetch("https://api.openweathermap.org/data/2.5/weather?id="+cityId+"&appid="+key)
    .then((response) => response.json())
    .then((json) => 
    {
        console.log(json.main);
    });
}

