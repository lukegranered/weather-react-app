import React, { useState } from "react";
import axios from "axios";

function App() {

  // const url = `https://api.openweathermap.org/data/2.5/weather?q=nashville&appid=28c0f11342353a1e2119eeb09264b995`

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Nashville</p>
          </div>
          <div className="temp">
            <h1>65°F</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>65°F</p>
          </div>
          <div className="humidity">
            <p>20%</p>
          </div>
          <div className="wind">
            12 MPH
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
