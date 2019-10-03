import React from 'react';
import Padi from '../../images/1200px-Logo_of_PADI.svg.png';
import '../Certifikat/certifikat.scss';


const Certifikat = () => {
    return (
        <div className="certifikat-container">

            <div className="certifikat-text">
                <h3>PADI - DYKKERCERTIFIKAT</h3>
            </div>

            <div className="certifikat-ad">
                <div className="text">
                    <h2>TAG ET INTERNATIONALT ANERKENDT DYKKERCERTIFIKAT</h2>
                    <p>Her finder du et stort udvalg af dykkerkurser lige fra begynder til prodessionel. Vi er et af Danmarks førende dykkercentre,
                        som uddanner fra PADI organisationen. Når du vælger at tage et dykkercertifikat hos os, får du ikke kun et internationalt
                        anerkendt dykkercertifikat til markedets bedste priser, du får også et dykkerkursus, hvor kvaliteten er i top.
                </p>

                    <p>Vi har kompetente instruktører på vores dykkerkurser. Erfaring, tillid og sikkerhed er vigtigt, når du dykker med os, derfor
                        står vi klar med et stort hold af kompetente instruktører.
                </p>
                </div>

                <div className="img-ad">
                    <img src={Padi} alt="Padi" />
                </div>

            </div>

            <a href="#"><h3 className="text-center">SE ALLE KURSER OG CERTIFIKATER HER!</h3></a>
        </div>
    )
}

export default Certifikat;
