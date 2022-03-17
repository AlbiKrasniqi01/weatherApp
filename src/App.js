import logo from './logo.svg';
import './App.css';
import Forecast from "./components/Forecast/Forecast";
import React, {useState, useEffect} from "react";

// Hook
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

  return (
      <div className="body">
        <div height= {size.height} width={size.width} className="App">
            {size.width}px / {size.height}px
            <h1>Weather App</h1>
              {/* Weather fetching component  */}
            <Forecast/>
        </div>
      </div>
  );
}

export default App;
