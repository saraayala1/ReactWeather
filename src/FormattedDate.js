import React from "react";
import './App.css'

export default function FormattedDate(props){
   return(
        <div className="formattedDate">
        <h3>{props.name}</h3>
        <h5>{props.description}</h5>
        </div>
    )
}