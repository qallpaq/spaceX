import React, {useContext, useEffect, useState} from "react";
import './contact-form.scss';
import {setCurrentPage} from "../../actions";
import {connect} from "react-redux";
import {AlertContext} from "../context/alert/alert-context";
import {Alert} from "../alert/alert";


const ContactForm = ({setCurrentPage}) => {
    useEffect(() => {
        setCurrentPage(5);
    }, []);

    const alert = useContext(AlertContext);

    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [phone, setPhone] = useState('');
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault()

        if (name && mail && phone && text) {
            alert.show('Your message sent to spaceX!', 'success')
            setName('')
            setMail('')
            setPhone('')
            setText('')
        } else {
            alert.show('Fill in ALL the fields!')
        }
    };

    return (
        <form className='contact' onSubmit={onSubmit}>
            <Alert/>
            <div className='contact__info'>
                <div className="contact__info-item">
                    <div className="contact__item-text">
                        <div className="contact__item-title">e-mail</div>
                        <div className="contact__item-subtitle">spacex@gmail.com</div>
                    </div>
                </div>

                <div className="contact__info-item">
                    <div className="contact__item-text">
                        <div className="contact__item-title">phone</div>
                        <div className="contact__item-subtitle">8-800-555-35-35</div>
                    </div>
                </div>

                <div className="contact__info-item">
                    <div className="contact__item-text">
                        <div className="contact__item-title">address</div>
                        <div className="contact__item-subtitle">69LMAO Street Pe, D.ick</div>
                    </div>
                </div>
            </div>

            <div className='contact__content'>
                <div className="contact__content-inputs">
                    <input className="contact__input"
                           placeholder='NAME'
                           value={name}
                           onChange={(e) => setName(e.target.value)}/>

                    <input className="contact__input"
                           placeholder='E-MAIL'
                           value={mail}
                           onChange={(e) => setMail(e.target.value)}/>

                    <input className="contact__input"
                           placeholder='PHONE'
                           value={phone}
                           onChange={(e) => setPhone(e.target.value)}/>
                </div>

                <div className="contact__content-submit">
                    <textarea className='contact__content-text'
                              placeholder='MESSAGE'
                              value={text}
                              onChange={(e) => setText(e.target.value)}/>
                    <button className='contact__content-btn'>send</button>
                </div>
            </div>
        </form>
    );
};


const mapStateToProps = () => {
    return {}
};

const mapDispatchToProps = {
    setCurrentPage
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);