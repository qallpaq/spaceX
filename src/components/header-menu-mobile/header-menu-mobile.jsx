import React from "react";
import {Link} from "react-router-dom";
import './header-menu-mobile.scss';


const HeaderMenuMobile = ({menu, closeMenu, links}) => {
    return (
        <div className={`header-menu-mobile ${menu && 'active'}`}>
            <div className="container">
                <ul className='header__links-mobile'
                    onClick={(e) => {
                        if (e.target.classList.contains('header-link-mobile__item')) {
                            closeMenu();
                        }
                    }}>
                    {
                        links.map(el => {
                            return (
                                <li className='header-link-mobile' key={el.id}>
                                    <Link to={el.link}>
                                        <span className='header-link-mobile__item'>{el.page}</span>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
};


export default HeaderMenuMobile;
