import React, { useState } from "react";
import axios from "axios";
import WeatherForecastPreview from "./WeatherForecastPreview";


export default function WeatherForecast(props) {
const [forecast, setForecast] = useState(null);
const [loaded, setLoaded] = useState(false);


function revealForecast(response) {
    console.log(response.data);
    setForecast(response.data);
    setLoaded(true);
    return null;
    }
    
if (loaded) {
    return(
    <div className="WeatherForecast row">
    <WeatherForecastPreview data={forecast.list[0]} />
    <WeatherForecastPreview data={forecast.list[1]} />
    <WeatherForecastPreview data={forecast.list[2]} />
    <WeatherForecastPreview data={forecast.list[3]} />
    <WeatherForecastPreview data={forecast.list[4]} />
    </div>
    );
} else {
    let apiKey = "9e495337e0feec7$ab53c0d9ca024297c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(revealForecast);

    return null;
    
}



}
    