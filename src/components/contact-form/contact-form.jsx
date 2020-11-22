import React, {useEffect} from "react";
import './contact-form.scss';
import {setCurrentPage} from "../../actions";
import {useDispatch} from "react-redux";
import ContactFormItem from "./contact-form-item";


const ContactForm = () => {
    useEffect(() => {
        dispatch(setCurrentPage(5))
    }, [])

    const dispatch = useDispatch()

    return (
        <form className='contact' onSubmit={(e) => e.preventDefault()}>
            <div className='contact__info'>
                <ContactFormItem title={'e-mail'} subtitle={'spacex@gmail.com'}/>
                <ContactFormItem title={'phone'} subtitle={'8-800-555-35-35'}/>
                <ContactFormItem title={'address'} subtitle={'69LMAO Street Pe, D.ick'}/>
            </div>

            <div className='contact__content'>
                <div className="contact__content-inputs">
                    <input className="contact__input" placeholder='NAME'/>
                    <input className="contact__input" placeholder='E-MAIL'/>
                    <input className="contact__input" placeholder='PHONE'/>
                </div>

                <div className="contact__content-submit">
                    <textarea className='contact__content-text' placeholder='MESSAGE'/>
                    <button className='contact__content-btn'>send</button>
                </div>
            </div>
        </form>
    );
};


export default ContactForm;