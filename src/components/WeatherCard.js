import React from "react";

const WeatherCard = ({ weatherData }) => {
    if (!weatherData) {
        return null; // se nao houver dados, nao rendere
    }

    const {name, main, weather} = weatherData;

    return (
        <div className="d-flex align-items-center justify-content-center mt-4">
           <div className="card" style={{width: '300px', height: '200px', backgroundColor: '#73616125'}}>
            <h2>{name}</h2>
                <p>Temperatura: {main.temp}°C</p>
                <p>Descricao: {weather[0].description}</p>
            </div>
        </div>
    )
}

export default WeatherCard;