import React, {useState} from "react";
import axios from "axios"
import "./App.css"
import './App'
export default function Forecast(props){
const [one, setOne]=useState(" ");
const [two, setTwo]=useState(" ");
const [three, setThree]=useState(" ");
const [four, setFour]=useState(" ");

function handleResponse(response){
   setOne({
    temp: Math.round(response.data.list[0].main.temp),
    date: new Date(response.data.list[0].dt * 1000),
    description: response.data.list[0].weather[0].description,
    icon: `http://openweathermap.org/img/wn/${response.data.list[0].weather[0].icon}@2x.png`,
   });
     setTwo({
    temp: Math.round(response.data.list[1].main.temp),
    date: new Date(response.data.list[1].dt * 1000),
    description: response.data.list[1].weather[0].description,
    icon: `http://openweathermap.org/img/wn/${response.data.list[1].weather[0].icon}@2x.png`,
   });  
     setThree({
    temp: Math.round(response.data.list[2].main.temp),
    date: new Date(response.data.list[2].dt * 1000),
    description: response.data.list[2].weather[0].description,
    icon: `http://openweathermap.org/img/wn/${response.data.list[2].weather[0].icon}@2x.png`,
   });  
     setFour({
    temp: Math.round(response.data.list[3].main.temp),
    date: new Date(response.data.list[3].dt * 1000),
    description: response.data.list[3].weather[0].description,
    icon: `http://openweathermap.org/img/wn/${response.data.list[3].weather[0].icon}@2x.png`,
   });  

}
function handleSubmit(event){
    event.preventDefault();
    let url=`https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&APPID=8eac7d0daaee5ecadb550cc3c656f342&units=imperial`
    axios.get(url).then(handleResponse)
}

    return(
    <div onClick={handleSubmit}>  
        <h3>Forecast</h3>
<div className="row">
<span className="col-3">
    <div><span className="forecastTemp">{one.temp}</span><span className="forecastUnits">°C|°F</span></div>
    <div className="forecastDescription">{one.description}</div>
<img src={one.icon} alt={one.description} className="icon"/>
</span>
<span className="col-3">
    <div><span className="forecastTemp">{two.temp}</span><span className="forecastUnits">°C|°F</span></div>
    <div className="forecastDescription">{two.description}</div>
<img src={two.icon} alt={two.description} className="icon"/>
</span>
<span className="col-3">
    <div><span className="forecastTemp">{three.temp}</span><span className="forecastUnits">°C|°F</span></div>
    <div className="forecastDescription">{three.description}</div>
<img src={three.icon} alt={three.description} className="icon"/>
</span>
<span className="col-3">
    <div><span className="forecastTemp">{four.temp}</span><span className="forecastUnits">°C|°F</span></div>
    <div className="forecastDescription">{four.description}</div>
<img src={four.icon} alt={four.description} className="icon"/>
</span>






</div>
    </div>
    )
}