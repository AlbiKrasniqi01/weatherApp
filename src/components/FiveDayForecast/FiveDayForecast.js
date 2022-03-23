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

    // let [mainCity, setMainCity] = useState('');
    // let [responseObj, setResponseObj] = useState({});
        const getFiveDayForecast = async() => {
        const res = await fetch(`https://community-open-weather-map.p.rapidapi.com/climate/month?q=london%2Cuk&units=metric`, {
                         
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": "0bfda3ec6fmshd423ec0929c0787p181fb2jsn85dfe6241ad5"
            }
        })

        const data = await res.json()
        console.log(data)
        return data
    }


   return (
       <div>
           <div>
               {/* {responseObj.map((item, index) => {
                   <ul key={index}>
                   <li>
                       {dayjs(item.dt_txt).format('dddd')}
                       <div>{item.forecastIcon}></div>
                     </span>
                     <span className="flex-1 text-right">
                       {item.min}&deg; / {item.max}&deg;
                     </span>
                   </li>
                 </ul>
               } */}
               <IntlProvider locale={locale} messages={messages[locale]}>
               </IntlProvider>
               <div className="five_forecast">
                  {mainCity !== '' ? <FiveDayConditions responseObj={responseObj} mainCity = {mainCity} /> : "No cities searched!"}
               </div>
               {/* </IntlProvider> */}

           </div>
       </div>
   )
}

export default FiveDayForecast;
 