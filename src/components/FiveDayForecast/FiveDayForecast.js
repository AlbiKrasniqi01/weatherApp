import React, { useState, useEffect } from 'react';
import FiveDayConditions from '../FiveDayConditions/FiveDayConditions';
import { IntlProvider, FormattedMessage } from 'react-intl';

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

const FiveDayForecast = ({responseObj, mainCity, locale, units, check}) => {

    let [fiveDay, setFiveDay] = useState('');
    let [unitsSet, setUnitsSet] = useState ('metric');
    let [checkUpdate, setCheckUpdate] = useState(0);

    useEffect(() => {
        if (check !== checkUpdate) {
            setCheckUpdate(check)
            getFiveDayForecast(responseObj.list[mainCity].id)
        }

        if (unitsSet !== units) {
            setUnitsSet(units)
            getNewUnits()
        }
    })

    const getNewUnits = async() => {
        if (units === "metric") {
            var data = await getFiveDayForecast(responseObj.list[mainCity].id)
        } else if (units === "imperial") {
            var data = await getFiveDayForecast(responseObj.list[mainCity].id)
        }
    }

    const getFiveDayForecast = async(id) => {
        const res = await fetch(`https://community-open-weather-map.p.rapidapi.com/forecast/daily?cnt=6&units=${units}&id=${id}`, {
            "method": "GET",
            "headers": {
                'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
                'X-RapidAPI-Key': '0a1494a602msh705260b0e4c166dp1cb901jsn36fcf81fb794'
            }
        })

        if (res.status === 429) {
            setFiveDay('')
            document.getElementById('five_forecast').textContent = 'API is overloaded'
            const data = {count: 0}
            return data
        } else {
            const data = await res.json()
            console.log("getFiveDayForecast:")
            console.log(data)
            setFiveDay(data)
        }

    }

    return (
        <div>
            <div>
                <IntlProvider locale={locale} messages={messages[locale]}>
                </IntlProvider>
                <div id="five_forecast">
                    {fiveDay !== '' ? <FiveDayConditions fiveDay = {fiveDay} units = {units} locale = {locale} /> : "No cities searched!"}
                </div>
            </div>
        </div>
    )
}

export default FiveDayForecast;
 
 