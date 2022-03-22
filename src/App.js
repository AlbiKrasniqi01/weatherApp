import refreshicon from './assets/refreshicon.png'; // with import
import './App.css';
import Forecast from "./components/Forecast/Forecast";
import React, {useState, useEffect} from "react";
import { IntlProvider, FormattedDate, FormattedTime } from 'react-intl';
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

const messages = {
    en: {
        heading:"Overview",
    },
    es: {
        heading:"Resumen",
    },
    fr: {
        heading:"Résumer",
    }
};


function App(props) {

  const size = useWindowSize()
  const [locale, setLocale] = useState('en')

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

  const handleChange = (e) => {
      setLocale(e.target.value)
  }

  return (

    <div className="body">
        <div style={{background: `url(${windy1})`, color:"white" }} id="App">
            <select onChange={handleChange} defaultValue="{locale}">
                {['en', 'es', 'fr'].map((x) => (
                    <option key={x}>{x}</option>
                ))}
            </select>
            <IntlProvider locale={locale} messages={messages[locale]}>
                <h1>
                <FormattedDate value = {props.date} year="numeric" month = "long" day="numeric" weekday="long" />
                </h1>
                <h1 id = "time">
                    <FormattedTime value = {props.time} />
                </h1>
            </IntlProvider>
            <Forecast changeBackground = {changeBackground} locale={locale} />
    </div>
  </div>
  );
}

export default App;
