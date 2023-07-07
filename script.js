let weather;
let description;
let wind;
let humidity;
var APIKey = "e95e68d847cae52c53bf55dcca4d43b4"

function callWeather(){
    var city =document.querySelector("#search-bar").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
    .then((response) => response.json())
    .then((data) => 
    {
        console.log(data);
        weather = ((data.main.temp) * 9/5) + 32;
        description = data.weather[0].description;
        humidity = data.main.humidity;
        wind = data.wind.speed;
        document.querySelector(".temperature").innerHTML = weather;
        document.querySelector(".description").innerHTML = description;
        document.querySelector(".humidity").lastElementChild.lastElementChild.innerHTML = "Humidity: "+humidity;
        document.querySelector(".wind").lastElementChild.lastElementChild.innerHTML = "Wind Speed: "+wind;

    });

}
