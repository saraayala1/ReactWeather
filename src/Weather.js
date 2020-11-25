import React from "react";
import axios from "axios";
import './App.css'

export default function Weather(){

function handleResponse(response){
    console.log(response.data);
}

    let url="https://api.openweathermap.org/data/2.5/weather?q=London&appid=d65010f0ee255fc171c7d8183e8bf68a&units=metric"
    axios.get(url).then(handleResponse)
   
    return (
        <div>
           <input type="text" className="searchbar" placeholder="Type city here..." autoFocus="on" />
           <input type="submit" className="submit" value="Search"/> 
           <button className="currentLocation">Current Location</button>
       
       </div>
    )
}