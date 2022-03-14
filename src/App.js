import logo from './logo.svg';
import './App.css';
import Forecast from "./components/Forecast/Forecast";
import React, {useState} from "react";
function useWindowSize(){
  const[size, setSize] = useState([window.innerHeight, window.innerWidth]);
  return size
}
function App() {
  const[height, width] = useWindowSize();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <main>
          {/* Weather feteching component  */}
        <Forecast/>
      </main>
      </header>
    </div>
  );
}

export default App;
