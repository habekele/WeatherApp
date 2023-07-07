let weather;
let description;
let wind;
let humidity;
let arr;
var APIKey = "e95e68d847cae52c53bf55dcca4d43b4"

function callWeather(){
    var city =document.querySelector("#search-bar").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
    .then((response) => response.json())
    .then((data) => 
    {
        
        arr = (Object.entries(data));
        console.log(arr);
        var cel = (arr[3][1].temp);
        weather = Math.floor((cel * 9/5) + 32);

        description = arr[1][1][0].description;
        humidity = arr[3][1].humidity;
        wind = arr[5][1].speed;

        document.querySelector(".temperature").innerHTML = weather;
        document.querySelector(".description").innerHTML = description;
        document.querySelector(".humidity").lastElementChild.lastElementChild.innerHTML = "Humidity: "+humidity;
        document.querySelector(".wind").lastElementChild.lastElementChild.innerHTML = "Wind Speed: "+wind;

    });

}
