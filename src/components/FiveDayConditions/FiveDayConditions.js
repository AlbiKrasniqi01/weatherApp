import React, {useEffect, useState} from 'react';


const FiveDayConditions = ({ fiveDay, units, locale }) => {

    useEffect (() => {
        if (units === "metric") {
            document.getElementById('fiveDayTemp').textContent = Math.round(fiveDay.list[0].temp.day) + "°C"
        } else if (units === "imperial") {
            document.getElementById('fiveDayTemp').textContent = Math.round(fiveDay.list[0].temp.day) + "°F"
        }
    })

    return (
        <div>
            <div className='fiveBackground'>
                <h2>Tomorrow!</h2>
                <h4 id = 'fiveDayTemp'>{Math.round(fiveDay.list[0].temp.day)}°C</h4>
            </div>
        </div>
    )
}

export default FiveDayConditions;