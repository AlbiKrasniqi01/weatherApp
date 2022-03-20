import React, { useState } from 'react';
import FiveDayConditions from '../FiveDayConditions/FiveDayConditions';

const FiveDayForecast = () => {

    
   let [city, setCity] = useState('');

   
   const uriEncodedLocation =  encodeURIComponent(city);


   let [responseObj, setResponseObj] = useState({});
   function getFiveDayForecast() {

    fetch("https://community-open-weather-map.p.rapidapi.com/forecast?q=london%2C%20uk&units=metric", {
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



//       //weather data fetch function will go here
//       fetch("https://community-open-weather-map.p.rapidapi.com/weather?units=metric&q=London%2Cuk", {
//       //fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=metric&q=${uriEncodedLocation}`, {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
// 		"x-rapidapi-key": "13f80ceb94msh62f26b55dc2eb41p1b5ecfjsnc82ae62ece3d"
// 	}
// })

//     .then(response => response.json())
//     .then(response => {
//         setResponseObj(response)
//     })

//     function getForecast(e) {
//         e.preventDefault();
//     }
    
//    }

   return (
       // JSX code will go here
       
       <div>
           {/* <div>
               {JSON.stringify(responseObj)}
           </div> */}
           <div>
                 <FiveDayConditions
               responseObj={responseObj}
               />
               <button onClick={getFiveDayForecast}>Get Fiveday Forecast</button>
     
       </div>
       </div>
   )
}

export default FiveDayForecast;