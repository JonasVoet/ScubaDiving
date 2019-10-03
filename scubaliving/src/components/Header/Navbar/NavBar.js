import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink exact to="/">HOME</NavLink>
                </li>
                <li>
                    <NavLink to="/shopsection">DYKKERUDSTYR</NavLink>
                </li>
                <li>
                    <NavLink to="/travelsection">DYKKERREJSER</NavLink>
                </li>
                <li>
                    <NavLink to="/certifikat">DYKKERKURSER</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">KONTAKT</NavLink>
                </li>
                <li>
                    <NavLink to="/about">OM OS</NavLink>
                </li>
            </ul>

        </nav>

    );
};

export default withRouter(NavBar);
