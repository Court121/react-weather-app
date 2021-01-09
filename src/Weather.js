import React,{useState} from "react";
import axios from "axios";
import "./Weather.css"

export default function Weather(){
    function handleResponse(response){

    }
    const apiKey = 
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