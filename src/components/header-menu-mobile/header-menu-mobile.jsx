import React from "react";
import {Link} from "react-router-dom";
import './header-menu-mobile.scss';


const HeaderMenuMobile = ({menu, closeMenu}) => {
    return (
        <div className={`header-menu-mobile ${menu && 'active'}`}>
            <div className="container">
                <ul className='header__links-mobile'
                    onClick={(e) => {
                        if (e.target.classList.contains('header-link-mobile__item')) {
                            closeMenu();
                        }
                    }}>

                    <li className='header-link-mobile'>
                        <Link to='/'>
                            <span className='header-link-mobile__item'>HOME</span>
                        </Link>
                    </li>

                    <li className='header-link-mobile'>
                        <Link to='/rockets/'>
                            <span className='header-link-mobile__item'>ROCKETS</span>
                        </Link>
                    </li>

                    <li className='header-link-mobile'>
                        <Link to='/ships/'>
                            <span className='header-link-mobile__item'>SHIPS</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};


export default HeaderMenuMobile;
