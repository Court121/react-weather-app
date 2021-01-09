import React from "react";
import Weather from "./Weather"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="Orlando"/>
      <footer>
        Project coded by Courtney Daniels on{" "} 
          <a href="https://github.com/Court121/react-weather-app"
        target="blank">
          Github </a>
      </footer>
      </div>
    </div>
  );
}

export default App;
