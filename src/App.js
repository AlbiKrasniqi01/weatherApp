import refreshicon from './assets/refreshicon.png'; // with import
import './App.css';
import Forecast from "./components/Forecast/Forecast";
import React, {useState, useEffect} from "react";
import { IntlProvider, FormattedDate, FormattedTime } from 'react-intl';
import Settings from './components/Settings/Settings';
import windy1 from './assets/windy1.jpeg';
import windy2 from './assets/windy2.jpeg';
import windy3 from './assets/windy3.jpeg';
import sunny1 from './assets/sunny1.jpeg';
import sunny2 from './assets/sunny2.jpeg';
import sunny3 from './assets/sunny3.jpeg';
import rainy1 from './assets/rainy1.jpeg';
import rainy2 from './assets/rainy2.jpeg';
import rainy3 from './assets/rainy3.jpeg';
import thunder1 from './assets/thunder1.jpeg';
import thunder2 from './assets/thunder2.jpeg';
import thunder3 from './assets/thunder3.jpeg';
import cloudy1 from './assets/cloudy1.jpeg';
import cloudy2 from './assets/cloudy2.jpeg';
import cloudy3 from './assets/cloudy3.jpeg';
import menuIcon from './assets/menuicon.png';
import getForecast from './components/Forecast/Forecast';

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

//Number generator to randomly select background
const random_bg = Math.floor((Math.random() * 3) + 1);

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
  const [buttonPopup, setButtonPopup] = useState(false);

  function changeBackground(weatherType) {
      if (weatherType === "Clear") {
          if (random_bg == 1) {
              document.getElementById('App').style.background = `url(${sunny1})`
          } else if (random_bg == 2) {
              document.getElementById('App').style.background = `url(${sunny2})`
          } else if (random_bg == 3) {
              document.getElementById('App').style.background = `url(${sunny3})`
          }

      } else if (weatherType === "Clouds") {

          if (random_bg == 1) {
              document.getElementById('App').style.background = `url(${cloudy1})`
          } else if (random_bg == 2) {
              document.getElementById('App').style.background = `url(${cloudy2})`
          } else if (random_bg == 3) {
              document.getElementById('App').style.background = `url(${cloudy3})`
          }
      } else if (weatherType === "Rain") {
          if (random_bg == 1) {
              document.getElementById('App').style.background = `url(${rainy1})`
          } else if (random_bg == 2) {
              document.getElementById('App').style.background = `url(${rainy2})`
          } else if (random_bg == 3) {
              document.getElementById('App').style.background = `url(${rainy3})`
          }
      } else if (weatherType === "Storm") {
          if (random_bg == 1) {
              document.getElementById('App').style.background = `url(${thunder1})`
          } else if (random_bg == 2) {
              document.getElementById('App').style.background = `url(${thunder2})`
          } else if (random_bg == 3) {
              document.getElementById('App').style.background = `url(${thunder3})`
          }
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
            <img className="refreshIcon" onClick={getForecast} src={refreshicon} alt=""/>
            <img className='menuIcon' src={menuIcon} onClick={() => setButtonPopup(true)}/>
            <IntlProvider locale={locale} messages={messages[locale]}>
                <h1 className='dateText'>
                <FormattedDate value = {props.date} year="numeric" month = "long" day="numeric" weekday="long" />
                </h1>
                <h1 id = "time">
                    <FormattedTime value = {props.time} />
                </h1>
            </IntlProvider>
            <Settings trigger={buttonPopup} setTrigger = {setButtonPopup}></Settings>
            {/* Weather fetching component */}
            <Forecast changeBackground = {changeBackground} locale={locale} />
    </div>
  </div>
  );
}

export default App;
