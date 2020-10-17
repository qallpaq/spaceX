import React from "react";
import './header.scss';
import {Link} from "react-router-dom";
import logo from './SpaceX-Logo.svg';


const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-dark bg-dark">
                <li className='header-link'>
                    <Link to='/'>
                        <img className='space-x-logo' src={logo} alt="logo"/>
                    </Link>
                </li>

                <li className='header-link'>
                    <Link to='/rockets/'>
                        ROCKETS
                    </Link>
                </li>

                <li className='header-link'>
                    <Link to='/ships/'>
                        SHIPS
                    </Link>
                </li>
            </nav>
        </header>
    );
};

export default Header;