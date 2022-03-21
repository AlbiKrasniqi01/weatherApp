import React from 'react';
import sunnyicon from '../../assets/sunnyicon.png'; 
import cloudyicon from '../../assets/cloudyicon.png'; 
import rainyicon from '../../assets/rainyicon.png'; 
import windyicon from '../../assets/windyicon.png'; 
import snowicon from '../../assets/snowicon.png'; 


const Conditions = ({ responseObj, mainCity }) => {
   return (       
       <div>
               <div>
                   <h2>{responseObj.list[mainCity].name}, {responseObj.list[mainCity].sys.country}</h2>
                   <h1>{Math.round(responseObj.list[mainCity].main.temp)}°C </h1>
                   <img className="photo" src={windyicon} />
                   <h2>{responseObj.list[mainCity].description}</h2>
               </div>
       </div>
   )
}

export default Conditions