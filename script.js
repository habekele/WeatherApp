let weather;
let description;
let wind;
let humidity;
let arr;
let city;
let country;
var APIKey = "e95e68d847cae52c53bf55dcca4d43b4"
const image = document.querySelector('.weather-box img');

function ChangeWeather(data){
   
        var cel = data.main.temp;
        description = data.weather[0].main;
        humidity = data.main.humidity;
        wind = data.wind.speed;
        city = data.name;
        country = data.sys.country;
        weather = Math.floor((cel * 9/5) + 32);

        weatherIcon(description);
        document.querySelector(".city").innerHTML = city+", "+country;
        document.querySelector(".temperature").innerHTML = weather+"ºF";
        document.querySelector(".description").innerHTML = description;
        document.querySelector(".humidity").lastElementChild.innerHTML = "Humidity: "+humidity+"%";
        document.querySelector(".wind").lastElementChild.innerHTML = "Wind Speed: "+wind+" mph";
        document.querySelector("#search-bar").value = "";

}
function search(){
    var input = document.querySelector("#search-bar").value;
    if (input === '') return;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${APIKey}`)
    .then((response) => response.json())
    .then((data) => 
    { 
        console.log(data);
        ChangeWeather(data);

    });
}
function weatherIcon(description){
    switch (description) {
        case 'Clear':
            image.src = 'assets/clear.png';
            break;

        case 'Rain':
            image.src = 'assets/rain.png';
            break;

        case 'Snow':
            image.src = 'assets/snow.png';
            break;

        case 'Clouds':
            image.src = 'assets/cloud.png';
            break;

        case 'Haze':
            image.src = 'assets/mist.png';
            break;

        default:
            image.src = '';
    }
}

