import React from 'react';
//import icon from '/src/assets/sunnyicon.png'; // with import

//import cloudy from './src/cloudy.png'; // Tell webpack this JS file uses this image


const fiveDayConditions = (props) => {

   return (       
       <div>

           {props.responseObj.cod === 200 ?
               <div className="fiveDayText">                   
                   <h2>Five day Forecast</h2>
                   <h2>{props.responseObj.name}</h2>
                   <h1>{Math.round(props.responseObj.main.temp)} °C</h1>
                   <h2>{(props.responseObj.weather[0].description)}</h2>
               </div>
           : null
           }
       </div>
   )
}

export default fiveDayConditions;