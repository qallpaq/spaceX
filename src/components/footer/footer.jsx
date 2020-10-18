import React from "react";
import './footer.scss';
import logo from '../images/SpaceX-Logo.svg';


const Footer = () => {
    return (
        <footer>
            <img className='footer-logo' src={logo} alt="spaceX"/>
        </footer>
    )
};

export default Footer;