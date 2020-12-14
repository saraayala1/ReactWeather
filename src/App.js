import React from"react";
import Weather from "./Weather"


function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="appBox">
          <h1>Weather Forecast</h1>
           <Weather/>
        </div>
       <footer> This site was coded by {" "}
        <a href="https://www.saraswebsites.com" target="_blank"  rel="noopener noreferrer">Sara Ayala </a> 
       <a href="https://github.com/saraayala1/ReactWeather" target="_blank"  rel="noopener noreferrer"> open sourced</a> on Github
        </footer>
      </div>
    </div>
  );
}

export default App;
