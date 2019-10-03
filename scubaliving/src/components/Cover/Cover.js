import React from 'react';
import CoverImg from '../../images/scuba2.jpg';
import './Cover.scss';

const Cover = () => {
    return (
        <figure className="container-fluid">

            <div className="full-width-image">
                <img src={CoverImg} alt="Scuba Dive Cover Img" />
            </div>
            <div className="absolute">
                <figcaption className="title">THE BEST WAY TO OBSERVE A FISH IS TO BECOME A FISH.</figcaption>
                <figcaption className="under_title">JACQUES COUSTEAU</figcaption>
            </div>
        </figure>

    )
}

export default Cover
