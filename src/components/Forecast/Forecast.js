import React, {useEffect, useState} from 'react';
import Conditions from '../Conditions/Conditions';
import refreshicon from "../../assets/refreshicon.png";
import { IntlProvider, FormattedMessage } from 'react-intl';
import FiveDayForecast from '../../components/FiveDayForecast/FiveDayForecast';
import FiveDayConditions from "../FiveDayConditions/FiveDayConditions";
import SocialMedia from '../../SocialMedia'
import SocialMediaTab from '../../components/SocialMediaTab/SocialMediaTab';

// import './Forecast.css';

const messages = {
    en: {
        noSearch:"No Cities Searched",
        alertText:"Please enter a location.",
        heading:"Forecast",
        search:"Search",
    },
    es: {
        noSearch:"No se han buscado ciudades",
        alertText:"Por favor ingrese una ubicación",
        heading:"Pronóstico",
        search:"Búsqueda",
    },
    fr: {
        noSearch:"Aucune ville recherchée",
        alertText:"Veuillez saisir un lieu",
        heading:"Prévision",
        search:"Chercher",
    }
};

const Forecast = ({ changeBackground, locale, units }) => {

    let [search, setSearch] = useState('');
    let [mainCity, setMainCity] = useState('');
    let [responseObj, setResponseObj] = useState({});
    const [buttonPopup, setButtonPopup] = useState(false);


    useEffect(() => {
        if (locale === "en") {
            document.getElementById('searchInput').placeholder = "Search Cities"
        } else if (locale === "es") {
            document.getElementById('searchInput').placeholder = "Buscar Ciudades"
        } else if (locale === "fr") {
            document.getElementById('searchInput').placeholder = "Rechercher Des Villes"
        }
    })

    const onSubmit = async(e) => {
        e.preventDefault()

        if(!search){
            document.getElementById('forecast').textContent = messages[locale].alertText;
        }
        else {
            var data = await getForecast({search})
            if (data.count === 0 ) {
                setMainCity('')
            } else {

                setResponseObj(data)
                var removeIt = document.getElementById('tempList');

                if (removeIt != null) {
                    removeIt.remove()
                }

                var t = document.createElement('ul');
                t.setAttribute('id', 'tempList')

                if (data.count > 1) {
                    for (var i = 0; i < (data.count); i++) {
                        var listOptions = document.createElement('li');
                        listOptions.textContent = data.list[i].name + ", " + data.list[i].sys.country;
                        listOptions.setAttribute('id', i)
                        listOptions.addEventListener('click', clickList)
                        t.appendChild(listOptions)
                    }
                    document.getElementById('wrapper').appendChild(t)
                }
            }
        }
    }

    function clickList(e){
        setMainCity(e.target.id)

        var removeIt = document.getElementById('tempList');
        if (removeIt != null) {
            removeIt.remove()
        }

    }

    function sendBackground(finalRes, finalCity) {
        changeBackground(finalRes.list[finalCity].weather[0].main)
    }



    const getForecast = async() => {
        //weather data fetch function will go here
        const res = await fetch(`https://community-open-weather-map.p.rapidapi.com/find?q=${search}&cnt=6&units=${units}`, {
            // const res = await fetch(`https://community-open-weather-map.p.rapidapi.com/find?q=${search}&cnt=5&units=metric`, {

            "method": "GET",
            "headers": {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": "db316946famshb765cb86ad49608p14213cjsn717f367b3b34"
            }
        })

        const data = await res.json()
        console.log("getForecast:")
        console.log(data)
        return data
    }

    return (
        <div>
            <div>
                <form className="searchBar"  onSubmit={onSubmit}>
                    <input type = "text" placeholder='Search Cities' id="searchInput" onChange={(e) => setSearch(e.target.value)} />
                    <button type="submit" className="submit-button">
                        <IntlProvider locale={locale} messages={messages[locale]}>
                            <FormattedMessage id="search" defaultMessage="Overview" value={{locale}}></FormattedMessage>
                        </IntlProvider>
                    </button>
                    <div id="wrapper"></div>
                </form>
                <br></br>
                <div id="forecast">
                    {mainCity !== '' ? <Conditions responseObj={responseObj} mainCity = {mainCity} sendBackground={sendBackground} locale = {locale} units = {units}/> : <div className="loader"></div> }
                </div>
            </div>
            <div className='bottomTab'>
                <IntlProvider locale={locale} messages={messages[locale]}>
                    <h2>
                        <FormattedMessage id="heading" defaultMessage="Forecast" value={{locale}}></FormattedMessage>
                    </h2>
                </IntlProvider>
                <h2 onClick={() => setButtonPopup(true)}>Posts</h2>
                {/*SOME SORT OF TAB SYSTEM HERE*/}

                <SocialMediaTab trigger={buttonPopup} setTrigger={setButtonPopup}>
                {mainCity !== '' ? <SocialMedia responseObj={responseObj} mainCity = {mainCity} /> : "No Instagram, No cities searched!"}
                </SocialMediaTab>  
                              
                {mainCity !== '' ? <FiveDayForecast responseObj = {responseObj} mainCity = {mainCity} locale = {locale} units = {units} /> : "No cities searched!"}

            </div>
        </div>
    )
}

export default Forecast;