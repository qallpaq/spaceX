import React from "react";
import {Link} from "react-router-dom";
import './header-menu-mobile.scss';
import {connect} from "react-redux";
import {changeTheme} from "../../actions";


const HeaderMenuMobile = ({menu, changeTheme}) => {
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

                    <li className='header-link header-link-mobile header-link-theme' onClick={() => changeTheme()}>
                        change theme
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
