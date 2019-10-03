import React from 'react';
import Fish from '../../images/fish.jpg';
import './about.scss';

const About = () => {
    return (
        <div className="aboutus-section">

            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-sm-6 col-xs-12">
                        <div class="aboutus">
                            <h2 class="aboutus-title">Om os</h2>
                            <p class="aboutus-text">Vi vil hellere have, at kunderne handler i butikken. Her kan du få den rigtige vejledning på alle de forskellige produkter, vi fører.</p>
                            <p class="aboutus-text">Chancen for at du laver et fejlkøb bliver mindre. Hvis du ikke har mulighed for at komme forbi vores butik, så ring hellere før du bestiller, så du kan få den rigtige vejledning.</p>
                            <a class="aboutus-more" href="#">Læs mere</a>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 col-xs-12">

                    </div>
                    <div class="col-md-5 col-sm-6 col-xs-12">
                        <div class="feature">
                            <div class="feature-box">
                                <div class="clearfix">
                                    <div class="iconset">
                                        <span class="glyphicon glyphicon-cog icon"></span>
                                    </div>
                                    <div class="feature-content">
                                        <h4>Kvalitet</h4>
                                        <p>Vi går ind for kvalitet, og går ikke på pompromis med kvaliteten af vores produkter</p>
                                    </div>
                                </div>
                            </div>
                            <div class="feature-box">
                                <div class="clearfix">
                                    <div class="iconset">
                                        <span class="glyphicon glyphicon-cog icon"></span>
                                    </div>
                                    <div class="feature-content">
                                        <h4>Service</h4>
                                        <p>Vi tilbyder god service, det går vi meget op i, så du for en god oplevelse</p>
                                    </div>
                                </div>
                            </div>
                            <div class="feature-box">
                                <div class="clearfix">
                                    <div class="iconset">
                                        <span class="glyphicon glyphicon-cog icon"></span>
                                    </div>
                                    <div class="feature-content">
                                        <h4>Support</h4>
                                        <p>Vi tilbyder telefon support fra 7.00 - 18.00, så det er nemt at få fat på os, vi hjælper dig til dit problem er løst!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
