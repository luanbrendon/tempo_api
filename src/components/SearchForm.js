import React, { useState } from "react";
import axios from "axios";
import './SearchForm.css'

const SearchForm = ({ onWeatherData }) => {
    const [location, setLocation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchWeatherData();
    };

    // fazer a solicitacao a API 
    const fetchWeatherData = () => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=71ee558c161a8d1eb0515e7426d095b2&lang=pt_br&units=metric`)
            .then((response) => {
                const weatherData = response.data;
                onWeatherData(weatherData); // Chama uma função passada por props para enviar os dados para o componente pai
            })
            .catch((error) => {
                console.log(error);
                // Trate os erros, se necessário
            });
    };

    return (
        <div className="d-flex allign-items-center justify-content-center mt-4">
            <form onSubmit={handleSubmit} className="form-inline">
                <div className="form-group">
                <input
                    type="text"
                    className="form-control mr-2"
                    placeholder="Digite o local..."
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}></input>
                    </div>
                    <div class="container d-grid gap-2 col-6 mx-auto">
                    <button type="submit" className="btn btn-secondary mt-2">Buscar</button>
                    </div>
            </form>
        </div>
    )

}
export default SearchForm;