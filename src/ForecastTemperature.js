import React, {useState} from "react";

export default function ForecastTemperature(props){
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
        <div>
    <span className="mainTemp">{props.imperial}</span>
    <span className="units">°<a onClick={convertToMetric} href='/'>C</a>|°<strong>F</strong></span>
        </div>
    );
}else {
let metric= Math.round((props.imperial-32)*5/9);

    return (
         <div>
    <span className="mainTemp">{metric}</span>
    <span className="units">°<strong>C</strong>|°<a  onClick={convertToImperial} href='/'>F</a></span>
        </div>
    )
}
}