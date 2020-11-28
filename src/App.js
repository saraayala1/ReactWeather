import React from"react";
import Weather from "./Weather"
import Forecast from "./Forecast"

function App() {
  return (
    <div className="App">
      <div className="appBox">
     <h1>Weather Forecast</h1>
      <Weather />
      <Forecast day={Monday}/>
      <Forecast day={Tuesday} />
      <Forecast day={Wednesday}/>
      <Forecast day={Thursday}/>
      <Forecast day={Friday}/>
      <Forecast day={Saturday}/>
   </div>
    </div>
  );
}

export default App;
