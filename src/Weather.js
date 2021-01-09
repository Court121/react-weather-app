import React,{useState} from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css"
import axios from "axios";


export default function Weather(props){
    let [city,setCity]= useState(props.defaultCity);
    let [weatherData,setWeatherData] = useState({ready:false});
    function handleResponse(){
        setWeatherData({
            ready:true,
            temperture: response.data.main.temp,
            icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            wind: response.data.wind.speed,
            city: response.data.name,
            description: response.data.weather[0].description,
            humidity:response.data.main.humidity,
            date: new Date(response.data.dt*1000)
        });

    }
    
    function search() {
        let apiKey = "9e495337e0feec7$ab53c0d9ca024297c";
     let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(url).then(handleResponse);}
    
     return(
         <div className="Weather">
             <form> 
                 <div className="row">
                 <div className="col-9">  
            <input type="search" placeholder="Enter a city"
            className="form-control"
            />
           </div> 
            <div className="col-3">
            <input type="submit" value="Search" 
            className="btn btn-primary"/>
            </div>
            </div>
             </form>
         <h1>Orlando</h1>
        <ul>
        <li>Wednsday 7:00pm</li>
        <li>Mostly Cloudy</li>
        </ul>
        <div className="row">
        <div className="col-6">
            <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Sunny"/>
            57 
        </div>
        <div className="col-6">
            <ul>
                <li>
                    Precipitation: 1%
                </li>
                <li>
                    Humidity: 69%
                </li>
                <li>
                Wind: 3 km/h
                </li>
            </ul>
        </div>
        </div>

       


        </div>
     )};