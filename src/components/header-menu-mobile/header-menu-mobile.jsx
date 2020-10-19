import React from "react";
import {Link} from "react-router-dom";
import './header-menu-mobile.scss';


const HeaderMenuMobile = ({menu}) => {
    return (
        <div className={`header-menu-mobile ${menu && 'active'}`}>
            <div className="container">
                <ul>
                    <li className='header-link-mobile'>
                        <Link to='/'>
                            HOME
                        </Link>
                    </li>

                    <li className='header-link-mobile'>
                        <Link to='/rockets/'>
                            ROCKETS
                        </Link>
                    </li>

                    <li className='header-link-mobile'>
                        <Link to='/ships/'>
                            SHIPS
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default HeaderMenuMobile;
