import React, {useState} from "react";
import './header.scss';
import {Link} from "react-router-dom";
import logo from '../images/SpaceX-Logo.svg';
import HeaderMenuMobile from "../header-menu-mobile/header-menu-mobile";
import {useSelectorContext} from "../context/selector-context/selector-context";


const Header = () => {
    const [menu, setMenu] = useState(false);
    const closeMenu = () => {
        return setMenu(false)
    };

    const {currentPage} = useSelectorContext()

    const links = [
        {link: '/', page: 'home', id: 1},
        {link: '/rockets/', page: 'rockets', id: 2},
        {link: '/dragons/', page: 'dragons', id: 3},
        {link: '/ships/', page: 'ships', id: 4},
        {link: '/contact/', page: 'contact', id: 5}
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
                                    <li key={el.id}
                                        className={`header-link header-link-pc ${currentPage === idx + 1 && 'active'}`}>
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

                    <HeaderMenuMobile menu={menu}
                                      closeMenu={closeMenu}
                                      links={links}/>
                </div>
            </nav>
        </header>
    );
};


export default Header;