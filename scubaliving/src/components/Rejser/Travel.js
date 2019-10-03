import React from 'react';

const Travel = (props) => {
    return (
        <figure className="travel-items">
            <img src={props.travelsProps.img} alt="rejser" />

            <div className="travel-text">
                <figcaption className="title">{props.travelsProps.title}</figcaption>
                <figcaption className="under_title">{props.travelsProps.p}</figcaption>
            </div>
        </figure>
    )
}

export default Travel
