import React from 'react';
import NavBar from './Navbar/NavBar';
import Logo from '../../images/ScubaLiving_logo_small.svg';
import Login from '../Login/Login';
import './header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={Logo} alt="ScubaLiving logo" />
            </div>

            <NavBar />

            <div className="search-container">
                <form>

                    <input type="text" aria-label="password" />

                    <button>Søg</button>

                </form>
            </div>

            <Login />

        </header>
    )
}

export default Header;
