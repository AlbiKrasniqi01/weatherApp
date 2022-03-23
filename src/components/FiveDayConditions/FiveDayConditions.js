import React, {useEffect, useState} from 'react';
import moment from 'moment';
import SimpleDateTime  from 'react-simple-timestamp-to-date';
import sunnyicon from '../../assets/sunnyicon.png';
import cloudyicon from '../../assets/cloudyicon.png';
import rainyicon from '../../assets/rainyicon.png';
import windyicon from '../../assets/windyicon.png';
import snowicon from '../../assets/snowicon.png';
import DayJS from 'react-dayjs';
import { format } from "date-fns";
import {FormattedDate, FormattedTime, IntlProvider } from 'react-intl';




const FiveDayConditions = ({ fiveDay, units, locale }) => {


    const dates = []
    const dates2 = []

    for (let i=1; i<=5; i++) {
        dates.push("h")
    }

    for (let i = 1; i <= 5; i++) {
        var currentUnixStamp = (fiveDay.list[i].dt);
        // const moment_date = moment(currentUnixStamp).format('MMM DD YYYY h:mm A')
        // const result = new Date(currentUnixStamp).toLocaleString('en-UK');
        const result2 = moment(currentUnixStamp).format('DD/MM/YYYY')
        const result3 = moment(result2).toDate()
        dates2.push(result3)
        console.log(dates2[i])
      }

    //   for (let i =0; i<dates.length; i++) {
    //       console.log(dates[i])
    //   }

    // var unixstamp = (fiveDay.list[1].dt)*1000;
    // console.log(unixstamp);
    // //console.log(fiveDay.list[1].dt)
    // const result = new Date(unixstamp).toLocaleString('en-UK');
    // console.log(result)


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