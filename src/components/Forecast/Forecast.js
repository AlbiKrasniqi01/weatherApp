import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';

const Forecast = () => {

    
   let [city, setCity] = useState('');

   
   const uriEncodedLocation =  encodeURIComponent(city);


   let [responseObj, setResponseObj] = useState({});
   function getForecast() {

      //weather data fetch function will go here
      //fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=London", {
      fetch("https://community-open-weather-map.p.rapidapi.com/weather?units=metric&q=London%2Cuk", {
      //fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=metric&q=${uriEncodedLocation}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
		"x-rapidapi-key": "13f80ceb94msh62f26b55dc2eb41p1b5ecfjsnc82ae62ece3d"
	}
})

    .then(response => response.json())
    .then(response => {
        setResponseObj(response)
    })

    function getForecast(e) {
        e.preventDefault();
    }
    
   }

   return (
       // JSX code will go here
       
       <div>
           {/* <div>
               {JSON.stringify(responseObj)}
           </div> */}
           <div>
               <p>Button to prevent overloading API call limit</p>
           <button onClick={getForecast}>Get Forecast</button>
           {/* <form onSubmit={getForecast}>
                <input
                    type="text"
                    placeholder="Enter Location"
                    maxLength="50"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    />
                <button type="submit">Get Forecast</button>
            </form> */}
           <Conditions
               responseObj={responseObj}
               />
       </div>
       </div>
   )
}

export default Forecast;
