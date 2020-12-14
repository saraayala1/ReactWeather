import React from "react";
import './App.css'

export default function FormattedDate(props){
    let date= new Date(props.date);
    let hour = date.getHours();
    let minute= date.getMinutes();
    if (minute<10) {minute=`0${minute}`}
   return(
        <div className="formattedDate">
        <h4>{props.name}</h4>
        <h5>{hour}:{minute}</h5>
        <h5>{props.description}</h5>
        </div>
    )
}