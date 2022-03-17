import React from 'react';
import sunnyicon from '../../assets/sunnyicon.png'; 
import cloudyicon from '../../assets/cloudyicon.png'; 
import rainyicon from '../../assets/rainyicon.png'; 
import windyicon from '../../assets/windyicon.png'; 
import snowicon from '../../assets/snowicon.png'; 


const Conditions = (props) => {

   return (       
       <div>
           {props.responseObj.cod === 200 ?
               <div>                   

                   <h2>{props.responseObj.name}</h2>
                   <h1>{Math.round(props.responseObj.main.temp)}°C </h1>



                   <img className="photo" src={windyicon} />
                   <h2>{(props.responseObj.weather[0].description)}</h2>
                   {/* <p>It is currently {Math.round(props.responseObj.main.temp)} degrees out with {props.responseObj.weather[0].description}.</p> */}
               </div>
           : null
           }
       </div>
   )
}

export default Conditions;