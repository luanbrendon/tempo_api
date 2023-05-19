import React, {useState} from "react";
import SearchForm from "./components/SearchForm";
import WeatherCard from "./components/WeatherCard";

const App = () => {

  const [weatherData, setweatherData] = useState(null);

  const handleWeatherData = (data) => {
    setweatherData(data);
  };

  return (
    <div className="container text-center">
      <h1 className=" ">APP do tempo</h1>
      <SearchForm onWeatherData={handleWeatherData}/>
      <WeatherCard weatherData={weatherData}/>
    </div>
   
  );
};

export default App;
