import React from 'react';

const FiveDayConditions = ({ responseObj, mainCity }) => {
    

    return (       
        <div>
                <div className='fiveBackground'>
                    <h2>Tomorrow!</h2>
                    <h4>{responseObj.list[mainCity].weather[0].description}</h4>

           
                    

                    <h4>{Math.round(responseObj.list[mainCity].main.temp)}°C</h4>
                </div>
        </div>
    )
 }

export default FiveDayConditions;