import React, { useState, useEffect } from 'react';
import FiveDayConditions from '../FiveDayConditions/FiveDayConditions';
import { IntlProvider, FormattedMessage } from 'react-intl';
import sunnyicon from "../../assets/sunnyicon.png";
import cloudyicon from "../../assets/cloudyicon.png";
import rainyicon from "../../assets/rainyicon.png";
import windyicon from "../../assets/windyicon.png";
import snowicon from "../../assets/snowicon.png";

const messages = {
    en: {
        buttonText:"Five Day Forecast",
    },
    es: {
        buttonText:"Pronóstico de cinco días",
    },
    fr: {
        buttonText:"Prévisions sur cinq jours",
    }
};

const FiveDayForecast = ({responseObj, mainCity, locale, units}) => {

    let [fiveDay, setFiveDay] = useState('');
    let [id, setId] = useState(responseObj.list[mainCity].id);
    let [unitsSet, setUnitsSet] = useState ('metric');

    useEffect(() => {
        if (fiveDay === '') {
            getFiveDayForecast()
        }

        if (unitsSet !== units) {
            setUnitsSet(units)
            getNewUnits()
        }
    })

    const getNewUnits = async() => {
        if (units === "metric") {
            var data = await getFiveDayForecast()
        } else if (units === "imperial") {
            var data = await getFiveDayForecast()
        }
    }

    const getFiveDayForecast = async() => {
        const res = await fetch(`https://community-open-weather-map.p.rapidapi.com/forecast/daily?cnt=5&units=${units}&id=${id}`, {
            "method": "GET",
            "headers": {
                'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
                'X-RapidAPI-Key': 'db316946famshb765cb86ad49608p14213cjsn717f367b3b34'
            }
        })
        const data = await res.json()
        console.log("getFiveDayForecast:")
        console.log(data)
        setFiveDay(data)
    }

    return (
        <div>
            <div>
                <IntlProvider locale={locale} messages={messages[locale]}>
                </IntlProvider>
                <div className="five_forecast">
                    {fiveDay !== '' ? <FiveDayConditions fiveDay = {fiveDay} units = {units} locale = {locale} /> : "No cities searched!"}
                </div>
            </div>
        </div>
    )
}

export default FiveDayForecast;
 