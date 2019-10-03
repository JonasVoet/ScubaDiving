import React from 'react';
import "@fortawesome/fontawesome-free/css/all.css";
import './footer.scss';

const Footer = () => {
    return (

        <footer className="footer">

            <ul>
                <li className="footer-title">NYTTIGE LINKS</li>
                <li>Om Scuba Living</li>
                <li>Kontakt</li>
                <li>Handelsbetingelser</li>
                <li>Persondatapolitik</li>
                <li>Åbningstider</li>
            </ul>


            <ul>
                <li className="footer-title">PRAKTISKE OPLYSNINGER</li>
                <li>Hovedkategorier</li>
                <li>Dykkerudstyr</li>
                <li>Dykkerrejser</li>
                <li>Dykkerkurser</li>
                <li>Service</li>
            </ul>



            <ul>
                <li className="footer-title">SOCIALE MEDIER - FØLG OS HER:</li>
                <li>LinkedIn <i className="fab fa-linkedin"></i></li>
                <li>Facebook <i className="fab fa-facebook-square"></i></li>
                <li>Instagram <i className="fab fa-instagram"></i></li>
            </ul>


        </footer>

    )
}

export default Footer
