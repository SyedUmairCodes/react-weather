import React from "react";
import "./currentWeather.css";

const CurrentWeather = () => {
  return (
    <div className="current-weather-card">
      <div className="card-top">
        <div>
          <p className="city-name">Karachi</p>
          <p className="city-weather">Sunny</p>
        </div>
        <img
          src="./icons/01d.png"
          alt="Weather icon"
          className="weather-icon"
        />
      </div>
      <div className="card-bottom">
        <p className="city-temperature">32C</p>
        <div className="temperature-detail">
          {/* First row */}
          <div className="detail-row">
            <span className="detail-heading">Details</span>
          </div>
          {/* Second row */}
          <div className="detail-row">
            <span className="detail-label">Feels like</span>
            <span className="detail-value">34C</span>
          </div>
          {/* Third row */}
          <div className="detail-row">
            <span className="detail-label">Wind</span>
            <span className="detail-value">2 m/s</span>
          </div>
          {/* Fourth row */}
          <div className="detail-row">
            <span className="detail-label">Humidity</span>
            <span className="detail-value">10 %</span>
          </div>
          {/* Fifth row */}
          <div className="detail-row">
            <span className="detail-label">Pressure</span>
            <span className="detail-value">15 hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
