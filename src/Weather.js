import React, {useState} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import FormattedDate from './FormattedDate';
import WeatherTemperature from './WeatherTemperature';
import Forecast from "./Forecast"

export default function Weather(){
const [city, setCity]= useState(" ");
const [weather, setWeather]= useState(" ");
function handleResponse(response){
    setWeather({
    name:response.data.name,
    temperature: Math.round(response.data.main.temp),
    feelsLike: Math.round(response.data.main.feels_like),
    humidity: response.data.main.humidity,
    max: Math.round(response.data.main.temp_max),
    min: Math.round(response.data.main.temp_min),
    date: new Date(response.data.dt * 1000),
    description: response.data.weather[0].description,
    icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    wind: Math.round(response.data.wind.speed)
});
}
function handleSubmit(event){
    event.preventDefault();
    let unit ="imperial"
      let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d65010f0ee255fc171c7d8183e8bf68a&units=${unit}`
    axios.get(url).then(handleResponse)
}
 function updateCity(event) {
    setCity(event.target.value);
  }
  
function searchLocation(position) {
  let apiKey = "8eac7d0daaee5ecadb550cc3c656f342";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(handleResponse);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
} 

let form= (
        <form onSubmit={handleSubmit}>
           <input type="search"
            className="searchbar"
            placeholder="Type city here..."
            autoFocus="on" 
            onChange={updateCity}/>
           <input type="submit" className="submit" value="Search"/> 
          <button className="currentLocation" onClick={getCurrentLocation}>Current Location</button>   
       </form>   
    );
    return (
<div>
        {form}
  <div className="container">
      <div className="row">
        <div className="col-4">
    <FormattedDate date={weather.date} name={weather.name} description ={weather.description} />
           <img src={weather.icon} alt={weather.description} className="icon"/>
        </div>
        <div className="col-4">
  <WeatherTemperature  imperial={weather.temperature} imperialMin={weather.min}
          imperialMax={weather.max} imperialFeels={weather.feelsLike} />
        </div>
        <div className="windHumidity col-4">
          <br />
          <div>Humidity: {weather.humidity}%</div>
          <div>Wind: {weather.wind}km/h</div>
        </div>
    </div>
  </div>
         <Forecast city={weather.name} />
</div>
    );
}