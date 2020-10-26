import React from "react";
import ContactForm from "../contact-form";
import {AlertState} from "../context/alert/alert-state";


const ContactPage = () => {
    return (
        <AlertState>
            <div className='container'>
                <ContactForm/>
            </div>
        </AlertState>
    );
};

export default ContactPage;