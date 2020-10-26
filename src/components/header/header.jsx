import React, {useState} from "react";
import './header.scss';
import {Link} from "react-router-dom";
import logo from '../images/SpaceX-Logo.svg';
import HeaderMenuMobile from "../header-menu-mobile/header-menu-mobile";
import {connect} from "react-redux";


const Header = ({currentPage}) => {
    const [menu, setMenu] = useState(false);
    const closeMenu = () => {
        return setMenu(false)
    };

    const links = [
        {link: '/', page: 'home'},
        {link: '/rockets/', page: 'rockets'},
        {link: '/dragons/', page: 'dragons'},
        {link: '/ships/', page: 'ships'},
        {link: '/contact/', page: 'contact'}
    ];

    return (
        <header>
            <nav className="navbar">
                <div className='container'>
                    <img className='space-x-logo' src={logo} alt="logo"/>

                    <div className='header__links'>
                        {
                            links.map((el, idx) => {
                                return (
                                    <li key={el.link}
                                        className={`header-link header-link-pc ${currentPage === idx + 1 ? 'active' : null}`}>
                                        <Link to={el.link}>
                                            {el.page}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </div>

                    <div className='header__burger' onClick={() => setMenu(() => !menu)}>
                        <span>
                        </span>
                    </div>

                    <HeaderMenuMobile menu={menu} closeMenu={closeMenu}/>
                </div>
            </nav>
        </header>
    );
};

const mapStateToProps = ({basic: {currentPage}}) => {
    return {currentPage}
};


export default connect(mapStateToProps)(Header);