import React from "react";

export default function ForecastDate(props){
 let date= new Date(props.date);
    let hour = date.getHours();

    return(
        <div>
            <h5>{hour}:00</h5>
        </div>
    )
}