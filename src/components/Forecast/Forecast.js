import React, { useState } from 'react'
import Conditions from '../Conditions/Conditions'
import { IoMdRefresh } from 'react-icons/io'

const Forecast = () => {

   const [city, setCity] = useState('');
   const [country, setCountry] = useState('');
   const [responseObj, setResponseObj] = useState({});

   const onSubmit = (e) => {

       e.preventDefault()

        if(!city){
            alert('Please enter a location.')
        }
        else {
            getForecast({city})
        }

    }

   function getForecast({ city }) {
      //weather data fetch function will go here
       //fetch("https://community-open-weather-map.p.rapidapi.com/find?q=london&cnt=5&type=like&units=metric", {
      //fetch("https://community-open-weather-map.p.rapidapi.com/weather?units=metric&q=geneva%2Cswz", {
      //fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=metric&q=${city}%2Cuk${country}`, {
      fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=metric&q=${city}`, {
      // fetch ("https://community-open-weather-map.p.rapidapi.com/weather?q=london&lang=en&units=metric", {

	"method": "GET",
	"headers": {
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
		"x-rapidapi-key": "97bd49d7c7msh76d11e9c9552604p131c5fjsnf16aadec91dc"
	}
    })

    .then(response => response.json())
    .then(response => {
        setResponseObj(response)
    })

    }

   function getCityForecast () {
       getForecast({city})
    }


   return (

       //<div>
           //{/* <div>
               //{JSON.stringify(responseObj)}
           //</div> */}
           <div>
            <IoMdRefresh className="refresh" onClick={getCityForecast} style = {{color:'white', cursor:'pointer'}}  />
               <form className="searchBar"  onSubmit={onSubmit}>
                   <input type = "search" id="input" placeholder='Search Cities' onChange={(e) => setCity(e.target.value)} />
               </form>

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
   )
}

export default Forecast


// if (responseObj.count > 1) {
//     console.log("hi")
//     var select = document.getElementById("search");
//     var options = ["1", "2", "3", "4", "5"];
//     for(var i = 0; i<responseObj.cod ;i++) {
//         var opt = options[i];
//         var el = document.createElement("option");
//         el.textContent = opt;
//         el.value = opt;
//         select.add(el);
//     };
//
//
//         <select id="search">
//             <option>Choose a number</option>
//         </select>


// function getForecast(e) {
//     e.preventDefault();
// }

