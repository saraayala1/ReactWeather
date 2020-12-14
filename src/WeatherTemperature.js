import React, {useState} from "react";

export default function WeatherTemperature(props){
  const [unit, setUnit] = useState("imperial")
function convertToImperial(event){
event.preventDefault();
setUnit("imperial")
}
function convertToMetric(event){
event.preventDefault();
setUnit("metric")
}
  if (unit === "imperial"){
    return(
        <div className="windHumidity">
    <span className="mainTemp">{props.imperial}</span>
    <span className="units">°<a onClick={convertToMetric} href='/'>C</a>|°<strong>F</strong></span>
      <br />   <span className="minMax">{props.imperialMin}°/{props.imperialMax}</span>° <br />
          <span className="col-2">Feels Like: {props.imperialFeels}°</span> 
        </div>
    );
}else {
let metric= Math.round((props.imperial-32)*5/9);
let min=Math.round((props.imperialMin-32)*5/9);
let max=Math.round((props.imperialMax-32)*5/9);
let feelsLike=Math.round((props.imperialFeels-32)*5/9);

    return (
         <div className="windHumidity">
    <span className="mainTemp">{metric}</span>
    <span className="units">°<strong>C</strong>|°<a  onClick={convertToImperial} href='/'>F</a></span>
        <br />  <span className="minMax">{min}°/{max}°</span>
         <br /> <span className="col-2">Feels Like: {feelsLike}°</span> 
        </div>
    )
}
}