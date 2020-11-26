import React, {useState} from "react";
import axios from "axios";
import './App.css'

export default function Weather(){
let [city, setCity]= useState(" ");
let [loaded, setLoaded]=useState(false)
let [weather, setWeather]= useState(" ");
function handleResponse(response){
    setLoaded(true);
    setWeather=({
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
  
let form=(
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
    if(loaded){
    return (
        <div>
        {form}
        {weather}
    </div>);
} else{
    return(
        <div>
        {form}
        </div>
    );
}



}