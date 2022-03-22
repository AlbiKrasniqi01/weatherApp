import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';


const Forecast = ({changeBackground}) => {

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

    function sendBackground(finalRes, finalCity) {
       changeBackground(finalRes.list[finalCity].weather[0].main)
    }

   const getForecast = async() => {
      //weather data fetch function will go here

     const res = await fetch(`https://community-open-weather-map.p.rapidapi.com/find?q=${search}&cnt=5&units=metric`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": "3caec1c9f0mshab6fd9e79acda91p10cd03jsn665791528a22"
	}
    })

    const data = await res.json()
    console.log(data)
    return data
   }



       return (

       <div>
           <div>

               <form className="searchBar"  onSubmit={onSubmit}>
                   <input type = "text" placeholder='Search Cities' id="searchInput" onChange={(e) => setSearch(e.target.value)} />
                   <button type="submit" className="submit-button">Search</button>
                   <div id="wrapper"></div>
               </form>
               <div className="forecast">
               {/* {mainCity != '' ? <Conditions responseObj={responseObj} mainCity = {mainCity} sendBackground={sendBackground}/> : "No cities searched yet"} */}
               {mainCity != '' ? <Conditions responseObj={responseObj} mainCity = {mainCity} sendBackground={sendBackground}/> : <div class="loader"></div>}

               </div>

          </div>
       </div>
   )

}

export default Forecast;
