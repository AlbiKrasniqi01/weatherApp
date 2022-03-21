import refreshicon from './assets/refreshicon.png'; // with import
import './App.css';
import Forecast from "./components/Forecast/Forecast";
import React, {useState, useEffect} from "react";
import FiveDayForecast from './components/FiveDayForecast/FiveDayForecast';
import windy1 from './assets/windy1.jpeg';
import sunny1 from './assets/sunny1.jpeg';
import rainy3 from './assets/rainy3.jpeg';
import thunder1 from './assets/thunder1.jpeg';
import cloudy3 from './assets/cloudy3.jpeg';

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

  function changeBackground(weatherType) {

      if (weatherType === "Clear") {
          document.getElementById('App').style.background = `url(${sunny1})`
      } else if (weatherType ==="Clouds") {
          document.getElementById('App').style.background = `url(${cloudy3})`
      } else if (weatherType === "Rain") {
          document.getElementById('App').style.background = `url(${rainy3}`
      } else if (weatherType === "Storm") {
          document.getElementById('App').style.background = `url(${thunder1}`
      }

  }

  return (

    <div className="body">
        <div style={{background: `url(${windy1})`, color:"white" }} id="App">
            {/* {size.width}px / {size.height}px */}
            {/* <h1>Weather App</h1> */}
            <h2>{date}</h2>
              {/* Weather fetching component  */}
            <Forecast changeBackground = {changeBackground} />
        <div className='bottomTab'>
          <h2>Overview</h2>
          <FiveDayForecast/>
        </div>
    </div>
  </div>
  );
}

export default App;
