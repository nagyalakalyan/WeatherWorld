function getDetails()
{
 var city=document.getElementById('inpu').value;
var temperature=document.getElementById('temperature');
var humidity=document.getElementById('humidity');
var windspeed=document.getElementById('windspeed');
var pressure=document.getElementById('pressure');
var visibility=document.getElementById('visibility');

const apiKey="6f6858ff4c38824e89cb1364436f4ced";
const url="https://api.openweathermap.org/data/2.5/weather?units=metric";


async function checkWeather(){
    const response=await fetch(url+`&appid=${apiKey}`+`&q=${city}`);
   var weatherData= await response.json();
    if(weatherData.cod==200)
    {
    temperature.innerHTML=weatherData.main.temp+"°C";
    humidity.innerHTML=weatherData.main.humidity+"%";
    windspeed.innerHTML=weatherData.wind.speed+"km/h";
    pressure.innerHTML=weatherData.main.pressure+"hpa";
    visibility.innerHTML=(weatherData.visibility)/1000+"km";
    }
    else
    {
        alert("Please enter a valid city name")
    }
}
checkWeather();



}