import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

export default function Forecast(props){
    return(
        <span className="forecastUnit">
            <h4>{props.day}</h4>
             <ReactAnimatedWeather
            icon={props.icon}
            color='black'
            size="30px"
            animate="true"
                />
        </span>
    )
}