import React, {useEffect, useState} from 'react';
import sunnyicon from '../../assets/sunnyicon.png';
import cloudyicon from '../../assets/cloudyicon.png';
import rainyicon from '../../assets/rainyicon.png';
import windyicon from '../../assets/windyicon.png';
import snowicon from '../../assets/snowicon.png';

const Conditions = ({ responseObj, mainCity, sendBackground, locale, units }) => {

    let [langSet, setLangSet] = useState ('en')
    let [unitsSet, setUnitsSet] = useState ('metric');

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


        if (langSet !== locale) {
            setLangSet(locale)
            getLanguage()
        }

        if (unitsSet !== units) {
            setUnitsSet(units)
            getNewUnits()
        }
    })

    const getNewUnits = async() => {
        if (units === "metric") {
            var data = await getSpecificForecast()
            document.getElementById('temperature').textContent = Math.round(data.main.temp) + "°C"
        } else if (units === "imperial") {
            var data = await getSpecificForecast()
            document.getElementById('temperature').textContent = Math.round(data.main.temp) + "°F"
        }
    }

    const getLanguage = async() => {
        if (locale === "es") {
            var data = await getSpecificForecast("es")
            document.getElementById('description').textContent = data.weather[0].description;
        } else if (locale === "fr") {
            var data = await getSpecificForecast("fr")
            document.getElementById('description').textContent = data.weather[0].description;
        } else if (locale === "en") {
            document.getElementById('description').textContent = responseObj.list[mainCity].weather[0].description
        }
    }

    const getSpecificForecast = async(language) => {

        const res = await fetch(`https://community-open-weather-map.p.rapidapi.com/weather?id=${responseObj.list[mainCity].id}&lang=${language}&units=${units}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": "db316946famshb765cb86ad49608p14213cjsn717f367b3b34"

            }
        })

        const data = await res.json()
        console.log("getSpecificForecast:")
        console.log(data)
        return data
    }

    return (
        <div>
            <div className='fadeBackground'>
                <h2>{responseObj.list[mainCity].name}, {responseObj.list[mainCity].sys.country}</h2>
                <h1 id='temperature'>{Math.round(responseObj.list[mainCity].main.temp)}°C </h1>
                <img id='photo'/>
                <h4 id='description'>{responseObj.list[mainCity].weather[0].description}</h4>
            </div>
        </div>
    )
}

export default Conditions