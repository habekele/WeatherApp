let weather;

function callWeather(){
    var APIKey = "e95e68d847cae52c53bf55dcca4d43b4"
    const city =document.getElementById('#search-bar input').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
    .then((response) => response.json())
    .then((json) => 
    {
        console.log(json.main);
    });
}

