import React, { useState } from 'react';
import FiveDayConditions from '../FiveDayConditions/FiveDayConditions';
import Conditions from '../Conditions/Conditions';
import Forecast from '../Forecast/Forecast';

const FiveDayForecast = () => {

    let [mainCity, setMainCity] = useState('');
    let [responseObj, setResponseObj] = useState({});

 
    const getFiveDayForecast = async() => {
        const res = await fetch(`https://community-open-weather-map.p.rapidapi.com/find?q=${mainCity}&cnt=5&units=metric`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": "221a3f948bmsh42abe4d765c15efp160ee0jsnc6271a62d749"
            }
        })

 
     const data = await res.json()
     console.log(data)
     return data
    }
        return (
        <div>
            <div>

                <div className="five_forecast">
                {mainCity !== '' ? <Forecast responseObj={responseObj} mainCity = {mainCity} getFiveDayForecast = {getFiveDayForecast}/> : "No cities searcheddd"}
                <h2>{mainCity} </h2>
                </div>
 
           </div>
        </div>
    )
}
 
 export default FiveDayForecast
 