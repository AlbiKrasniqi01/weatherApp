import React from 'react';

const FiveDayConditions = ({ responseObj, mainCity }) => {

    return (
        <div>
            <div className='fiveBackground'>
                {/* <img id='photo' src={sunnyicon} /> */}
                <h2>Test</h2>
                <h4>{responseObj.list[mainCity].weather[0].description}</h4>
            </div>
        </div>
    )
}

export default FiveDayConditions;