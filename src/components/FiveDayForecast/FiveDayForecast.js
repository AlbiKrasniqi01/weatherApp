import React, { useState } from 'react';
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



const FiveDayForecast = ({responseObj, mainCity, locale}) => {

    let [mainCity, setMainCity] = useState('');
    let [responseObj, setResponseObj] = useState({});


    const getFiveDayForecast = async() => {
        const res = await fetch(`https://community-open-weather-map.p.rapidapi.com/find?q=${mainCity}&cnt=5&units=metric`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": "221a3f948bmsh42abe4d765c15efp160ee0jsnc6271a62d749"
            }
        })

        const data = await res.json()
        console.log(data)
        return data
    }


   return
       <div>
           <div>
               <FiveDayConditions responseObj={responseObj}/>
               <IntlProvider locale={locale} messages={messages[locale]}>
                   <button>
                       <FormattedMessage id="buttonText" defaultMessage="Five Day Forecast" value={{locale}}></FormattedMessage>
                   </button>
               </IntlProvider>
               {/*<div className="five_forecast">*/}
               {/*    {mainCity !== '' ? <Forecast responseObj={responseObj} mainCity = {mainCity} getFiveDayForecast = {getFiveDayForecast}/> : "No cities searched!"}*/}
               {/*    <h2>{mainCity} </h2>*/}
               {/*</div>*/}
           </div>
       </div>
   )
}

export default FiveDayForecast;