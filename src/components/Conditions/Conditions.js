import React from 'react';
//import cloudy from './src/cloudy.png'; // Tell webpack this JS file uses this image


const Conditions = (props) => {
   return (
       <div>
           {props.responseObj.cod === 200 ?
               <div>                   
                   <h4>{props.responseObj.name}</h4>
                   <h2>{Math.round(props.responseObj.main.temp)} °C</h2>
                   <h4>{(props.responseObj.weather[0].description)}</h4>
                   {/* <p>It is currently {Math.round(props.responseObj.main.temp)} degrees out with {props.responseObj.weather[0].description}.</p> */}
               </div>
           : null
           }
       </div>
   )
}

export default Conditions;