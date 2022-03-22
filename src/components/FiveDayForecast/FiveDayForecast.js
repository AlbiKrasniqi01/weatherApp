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

   return (
       <div>
           <div>
               <FiveDayConditions responseObj={responseObj}/>
               <IntlProvider locale={locale} messages={messages[locale]}>
                   <button>
                       <FormattedMessage id="buttonText" defaultMessage="Five Day Forecast" value={{locale}}></FormattedMessage>
                   </button>
               </IntlProvider>
           </div>
       </div>
   )
}

export default FiveDayForecast;