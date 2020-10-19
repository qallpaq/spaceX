import React, {useState} from "react";
import './header.scss';
import {Link} from "react-router-dom";
import logo from '../images/SpaceX-Logo.svg';
import HeaderMenuMobile from "../header-menu-mobile/header-menu-mobile";


const Header = () => {

    const [menu, setMenu] = useState(false);

    return (
        <header>
            <nav className="navbar navbar-dark bg-dark">
                <div className='container'>
                    <li className='header-link'>
                        <Link to='/'>
                            <img className='space-x-logo' src={logo} alt="logo"/>
                        </Link>
                    </li>

                    <li className='header-link header-link-pc'>
                        <Link to='/rockets/'>
                            ROCKETS
                        </Link>
                    </li>

                    <li className='header-link header-link-pc'>
                        <Link to='/ships/'>
                            SHIPS
                        </Link>
                    </li>

                    <div className='header__burger' onClick={() => setMenu(() => !menu)}>
                        <span>
                        </span>
                    </div>

                    <HeaderMenuMobile menu={menu}/>
                </div>
            </nav>
        </header>
    );
};

export default Header;