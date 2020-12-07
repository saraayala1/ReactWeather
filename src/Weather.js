import React, {useState} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import FormattedDate from './FormattedDate';


export default function Weather(){
const [city, setCity]= useState(" ");
const [weather, setWeather]= useState(" ");
function handleResponse(response){
    setWeather({
    name:response.data.name,
    temperature: Math.round(response.data.main.temp),
    feelsLike: Math.round(response.data.main.feels_like),
    humidity: response.data.main.humidity,
    tempMax: Math.round(response.data.main.temp_max),
    tempMin: Math.round(response.data.main.temp_min),
    date: new Date(response.data.dt * 1000),
    description: response.data.weather[0].description,
    icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    wind: response.data.wind.speed
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
        <div className="col-4">
    <FormattedDate date={weather.date} name={weather.name} description ={weather.description} />
        </div>
        <div className="col-3">
          <li>
            <img src={weather.icon} alt={weather.description} className="icon"/>
          </li>
        </div>
        <div className="col-3">
          <li><span className="mainTemp">{weather.temperature}</span><span className="units">°C|°F</span></li>
          <li><span className="minMax">{weather.tempMin}/{weather.tempMax}</span>°</li>
        </div>
        <div>
          <span className="col-2">Feels Like: {weather.feelsLike}°</span> 
          <span className="col-2">Humidity: {weather.humidity}%</span>
          <span className="col-2">Wind: {weather.wind}km/h</span>
        </div>
    </ul>
  </div>

</div>
    );
}