import React, { useState } from 'react';
import Travels from './Travels';
import './travels.scss';

const TravelSection = () => {

    const [travels] = useState([

        { img: "./assets/img/malta.jpg", title: "MALTA", p: "Oplev skønne Malta og det helt fantatiske dyreliv og sammenhold. Vi arrangerer dykkerrejser til malta hele året rundt." },
        { img: "./assets/img/norge.JPG", title: "NORGE", p: "Nordeuropas bedste dykkersport ligger i Norge. Vi har 25 års erfaring med dyk i Norge. Oplev det klareste vand i verden!" }

    ]);

    return (
        <div className="travel-container">

            <h2>DYK UD I VERDEN</h2>

            <Travels allTravelsProps={travels} />
            <a href="#"> <h3 className="text-center">SE FLERE DESTINATIONER OG MULIGHEDER HER!</h3></a>


        </div>
    )
}

export default TravelSection
