import React from 'react';
import Travel from './Travel';

const Travels = (props) => {
    const allTravels = props.allTravelsProps.map(t => {

        return (
            <Travel travelsProps={t} />
        )
    });




    return (
        <div className="item-container">
            {allTravels}
        </div>
    )
}

export default Travels
