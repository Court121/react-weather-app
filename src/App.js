import React from "react";
import Weather from "./Weather"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="Orlando"/>
      <footer>
      <a href="https//github.com/react-weather-app"></a>
      </footer>
      </div>
    </div>
  );
}

export default App;
