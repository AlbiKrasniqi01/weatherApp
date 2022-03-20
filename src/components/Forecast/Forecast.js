import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';

const Forecast = () => {

   let [search, setSearch] = useState('');
   let [mainCity, setMainCity] = useState('');
   let [responseObj, setResponseObj] = useState({});


   const onSubmit = async(e) => {
        e.preventDefault()

        if(!search){
            alert('Please enter a location.')
        }
        else {
            var data = await getForecast({search})
            setResponseObj(data)

            if (data != null) {

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

   const getForecast = async() => {
      //weather data fetch function will go here
     const res = await fetch(`https://community-open-weather-map.p.rapidapi.com/find?q=${search}&cnt=5&units=metric`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
		"x-rapidapi-key": "97bd49d7c7msh76d11e9c9552604p131c5fjsnf16aadec91dc"
	}
    })
    const data = await res.json()

    return data
   }

       return (
       <div>
           <div>
               <form className="searchBar"  onSubmit={onSubmit}>
                   <input type = "text" placeholder='Search Cities' className="searchInput" onChange={(e) => setSearch(e.target.value)} />
                   <button type="submit" className="submit-button">Search</button>
                   <div id="wrapper"></div>
               </form>
               <div className="forecast">
               {mainCity != '' ? <Conditions responseObj={responseObj} mainCity = {mainCity} /> : "No cities searched"}
               </div>
       </div>
       </div>
   )
}

export default Forecast;
