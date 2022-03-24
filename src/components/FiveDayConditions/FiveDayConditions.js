import React, {useEffect, useState} from 'react';
import moment from 'moment';
import SimpleDateTime  from 'react-simple-timestamp-to-date';

// import DayJS from 'react-dayjs';
// import { format } from "date-fns";
// import {FormattedDate, FormattedTime, IntlProvider } from 'react-intl';




const FiveDayConditions = ({ fiveDay, units, locale }) => {



    useEffect (() => {
        if (units === "metric") {

            // document.getElementById('fiveDayTemp').textContent = Math.round(fiveDay.list[0].temp.day) + "°C"
        } else if (units === "imperial") {
            // document.getElementById('fiveDayTemp').textContent = Math.round(fiveDay.list[0].temp.day) + "°F"
        }

    })



    return (
        <div>
                <div className='forecastRow'>
                <h4 id='fiveDayTemp'> {moment(fiveDay.list[1].dt*1000).format('dddd Do')}:  {Math.round(fiveDay.list[1].temp.day)}°</h4>
                </div>

                <div className='forecastRow'>
                <h4 id='fiveDayTemp'>{moment(fiveDay.list[2].dt*1000).format('dddd Do')}: {Math.round(fiveDay.list[2].temp.day)}°</h4>
                </div>

                <div className='forecastRow'>
                <h4 id='fiveDayTemp'> {moment(fiveDay.list[3].dt*1000).format('dddd Do')}: {Math.round(fiveDay.list[3].temp.day)}°</h4>
                </div>

                <div className='forecastRow'>
                <h4 id='fiveDayTemp'> {moment(fiveDay.list[4].dt*1000).format('dddd Do')}: {Math.round(fiveDay.list[4].temp.day)}°</h4>
                </div>

                <div className='forecastRow'>
                <h4 id='fiveDayTemp'> {moment(fiveDay.list[5].dt*1000).format('dddd Do')}: {Math.round(fiveDay.list[5].temp.day)}°
                </h4> 
                </div>

        </div>
    )
}

export default FiveDayConditions;