import React, { useEffect } from 'react';
import sunnyicon from '../../assets/sunnyicon.png'; 
import cloudyicon from '../../assets/cloudyicon2.png'; 
import rainyicon from '../../assets/rainyicon.png'; 
import windyicon from '../../assets/windyicon.png'; 
import snowicon from '../../assets/snowicon.png';



const Conditions = ({ responseObj, mainCity, sendBackground }) => {

   sendBackground(responseObj, mainCity)
    useEffect(() => {
        var type = responseObj.list[mainCity].weather[0].main
        if (type === "Clear") {
            document.getElementById('photo').src = `${sunnyicon}`
        } else if (type === "Clouds") {
            document.getElementById('photo').src = `${cloudyicon}`
        } else if (type === "Rain") {
            document.getElementById('photo').src = `${rainyicon}`
        } else if (type === "Storm") {
            document.getElementById('photo').src = `${windyicon}`
        } else if (type === "Snow") {
            document.getElementById('photo').src = `${snowicon}`
        }
    });

   return (       
       <div>
               <div className='fadeBackground'>
                   <h2>{responseObj.list[mainCity].name}, {responseObj.list[mainCity].sys.country}</h2>
                   <h1 id='temperature'>{Math.round(responseObj.list[mainCity].main.temp)}°C </h1>
                   <img id='photo' src={sunnyicon} />
<<<<<<< HEAD
                   <h4>{responseObj.list[mainCity].weather[0].description}</h4>
=======
                   <h2>{responseObj.list[mainCity].description}</h2>
>>>>>>> 6536cc221ba60ce8a41c6f958545abee9d1a393a
               </div>
       </div>
   )
}

export default Conditions