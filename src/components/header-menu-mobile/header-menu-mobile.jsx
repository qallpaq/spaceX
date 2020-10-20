import React from "react";
import {Link} from "react-router-dom";
import './header-menu-mobile.scss';
import {connect} from "react-redux";
import {changeTheme} from "../../actions";


const HeaderMenuMobile = ({menu, changeTheme, closeMenu}) => {
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

                    <li className='header-link header-link-mobile header-link-theme' onClick={() => changeTheme()}>
                        <span className='header-link-mobile__item'>change theme</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const mapStateToProps = () => {
    return {}
};

const mapDispatchToProps = {
    changeTheme
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMenuMobile);
