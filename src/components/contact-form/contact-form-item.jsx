import React from 'react'


const ContactFormItem = ({title, subtitle}) => {
    return (
        <div className="contact__info-item">
            <div className="contact__item-text">
                <div className="contact__item-title">{title}</div>
                <div className="contact__item-subtitle">{subtitle}</div>
            </div>
        </div>
    )
}


export default ContactFormItem