import React, {useState} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

export default function Weather(){
const [city, setCity]= useState(" ");
const [weather, setWeather]= useState(" ");
function handleResponse(response){
    setWeather({
    temperature: Math.round(response.data.main.temp),
    feelsLike: Math.round(response.data.main.feels_like),
    humidity: response.data.main.humidity,
    tempMax: Math.round(response.data.main.temp_max),
    tempMin: Math.round(response.data.main.temp_min),
    description: response.data.weather[0].description,
    icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    wind: response.data.wind.speed
    });
}
function handleSubmit(event){
    event.preventDefault();
      let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d65010f0ee255fc171c7d8183e8bf68a&units=metric`
    axios.get(url).then(handleResponse)
}
 function updateCity(event) {
    setCity(event.target.value);
  }
  
let form= (
        <form onSubmit={handleSubmit}>
           <input type="search"
            className="searchbar"
            placeholder="Type city here..."
            autoFocus="on" 
            onChange={updateCity}/>
           <input type="submit" className="submit" value="Search"/> 
           <button className="currentLocation">Current Location</button>
       </form>   
    );
    return (
<div>
        {form}
  <div className="container">
    <ul className="row">
        <div className="col-3">
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
          <li>Description: {weather.description}</li> 
        </div>
        <div className="col-3">
          <li>Temperature: {Math.round(weather.temperature)}°C|°F</li>
          <li>Feels Like: {weather.feelsLike}°C|°F</li>
          <li>Humidity: {weather.humidity}%</li>
        </div>
        <div className="col-3">
          <li>Min: {weather.tempMin}°C|°F</li>
          <li>Max: {weather.tempMax}°C|°F</li>
          <li>Wind: {Math.round(weather.wind)}km/h</li>
        </div>
    </ul>
  </div>
</div>
    );
}