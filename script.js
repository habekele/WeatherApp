function callWeather(){
    fetch("https://api.openweathermap.org/data/2.5/weather?id=5231851&appid=e95e68d847cae52c53bf55dcca4d43b4")
    .then((response) => response.json())
    .then((json) => console.log(json));
}

