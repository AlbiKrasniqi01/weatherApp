import React, {useEffect, useState} from 'react';

const fiveDayConditions = ({ responseObj }) => {

   return (       
       <div>
           {responseObj.cod === 200 ?
               <div className="fiveDayText">
                   <h2>Forecast</h2>
                   <h2>{responseObj.name}</h2>
                   <h1>{Math.round(responseObj.main.temp)} °C</h1>
                   <h2>{(responseObj.weather[0].description)}</h2>
               </div>
           : null
           }
       </div>
   )
}

export default fiveDayConditions;