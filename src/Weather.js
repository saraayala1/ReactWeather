import React from "react";
import axios from "axios";

export default function Weather(){

function handleResponse(response){
    console.log(response.data.main.temp);
}


    let url="https://api.openweathermap.org/data/2.5/weather?q=London&appid=d65010f0ee255fc171c7d8183e8bf68a"
    axios.get(url).then(handleResponse)
   
   
   
    return (
        <div>
            <input type="text" placeholder="Type city here..." autoFocus="on" />
           <input type="submit" value="search"/> 
       </div>
    )
}