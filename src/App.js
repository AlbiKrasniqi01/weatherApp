import logo from './logo.svg';
import refreshicon from './assets/refreshicon.png'; // with import

import './App.css';
import Forecast from "./components/Forecast/Forecast";
import Tab from "./components/Tab/Tab";
//import React, {useState} from "react";
import React, {useState, useEffect} from "react";
import FiveDayForecast from './components/FiveDayForecast/FiveDayForecast';


// Hookcago
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
  });
  useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
          // Set window width/height to state
          setWindowSize({
              width: window.innerWidth,
              height: window.innerHeight,
          });
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

function App() {
  const size = useWindowSize();
  const current = new Date();  
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  const date = `${days[current.getDay()]} ${current.getDate()}  ${months[current.getMonth()]} ${current.getFullYear()}  `;
  return (

    <div className="body">
    <div width={size.height} className="App">
      <img className="refreshIcon" src={refreshicon} />
        {/* {size.width}px / {size.height}px */}
        {/* <h1>Weather App</h1> */}
        <h2>{date}</h2>
          {/* Weather fetching component  */}
        <Forecast>
        </Forecast>

    <div className='bottomTab'>
      <h2>Overview</h2>
      <FiveDayForecast/>
    </div>

    </div>
  
  </div>
  );
}

export default App;
