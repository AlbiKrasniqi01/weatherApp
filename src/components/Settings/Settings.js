import React, {useState, useEffect, Suspense} from "react";
import './Settings.css';
import { useTranslation } from 'react-i18next'


// I USED THIS VIDEO WHEN ATTEMPTING TO IMPLEMENT THE DIFFERENT LANGUAGES:  https://www.youtube.com/watch?v=cHqxgLhOl5Y

//IF YOU FOLLOW THE VIDEO, WHEN ADDING THE CODE TO index.js THE APP WILL ONLY OUTPUT A WHITE SCREEN. I HAVE NO CLUE WHY.

function Settings (props) {
    
    const {t, i18n} = useTranslation(); //Used from this link "https://react.i18next.com/latest/using-with-hooks" where constant t is used to target which text will be translated 

    function handleClick(lang) {   //Function is used to change the language to the given input 
        i18n.changeLanguage(lang);
    }

    return(props.trigger) ? (
        <div className="popup"> {/* When the settings button is pressed, other options will appear including language, temperature and a close button*/}
                                {/* When the close button is pressed, all buttons apart from settings button will disappear*/}
                                {/* When the settings button is pressed, nothing apart from the three buttons mentioned can be interacted with. For exmaple you can't search for a city whilst the settings are open */}
            <div className="popup-inner">
                <button className="button-close" onClick={() => props.setTrigger(false)}>Close</button> 
                <div className = "LanguageForm">                             
                {/* Used a form with options which will create a drop down with all the possitble language options. Didn't know how to fully implement this so that the change will be permanent */}
                    <form id="LanguageForm" onSubmit={handleClick} >Language:        
                        <select>                                              
                            <option> English </option>
                            <option> French </option>
                            <option> Spanish </option>
                            
                        </select>
                        <button type = "submit">Done</button> {/* Created this button to submit the users choice. Currently only refreshes the page without applying the change*/ }
                    </form>
                </div>
                {/* Used a form with options which will create a drop down with either celcius or farenheit. */
                /* Didn't get to this but once chosen, it will need to do the necessary calculations to change the temperature*/}
                <div className = "TempForm">
                    <form id="TempForm">Temperature:
                        <select>
                            <option>Celcius</option>
                            <option>Farenheit</option>
                        </select>
                        <button type="submit">Done</button> {/* Created this button to submit the users choice. Currently only refreshes the page without applying the change*/ }
                    </form>
                </div>

                {props.children}
            </div>
        </div>
    ) : "";

}

export default Settings