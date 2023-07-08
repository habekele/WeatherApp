let weather;
let description;
let wind;
let humidity;
let arr;
let city;
let country;
var APIKey = "e95e68d847cae52c53bf55dcca4d43b4"

function ChangeWeather(data){
   
        var cel = data.main.temp;
        description = data.weather[0].description;
        humidity = data.main.humidity;
        wind = data.wind.speed;
        city = data.name;
        country = data.sys.country;
        weather = Math.floor((cel * 9/5) + 32);

        document.querySelector(".city").innerHTML = city+", "+country;
        document.querySelector(".temperature").innerHTML = weather;
        document.querySelector(".description").innerHTML = description;
        document.querySelector(".humidity").lastElementChild.innerHTML = "Humidity: "+humidity+"%";
        document.querySelector(".wind").lastElementChild.innerHTML = "Wind Speed: "+wind+" mph";
        document.querySelector("#search-bar").value = "";

}
function search(){
    var input = document.querySelector("#search-bar").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${APIKey}`)
    .then((response) => response.json())
    .then((data) => 
    { 
        console.log(data);
        ChangeWeather(data);

    });
}