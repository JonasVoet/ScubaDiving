import React from 'react';
import Cover from '../Cover/Cover';
import ShopSection from '../Products/ShopSection';
import TravelSection from '../Rejser/TravelSection';
import Certifikat from '../Certifikat/Certifikat';


const Home = () => {
    return (
        <div className="wrapper">
            <Cover />
            <ShopSection />
            <TravelSection />
            <Certifikat />

        </div>
    )
}

export default Home;
