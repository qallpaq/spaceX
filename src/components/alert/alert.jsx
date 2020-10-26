import React, {useContext} from "react";
import {AlertContext} from "../context/alert/alert-context";
import {CSSTransition} from 'react-transition-group';
import './alert.scss';


export const Alert = () => {
    const {alert, hide} = useContext(AlertContext)

    return (
        <CSSTransition
            in={alert.visible}
            timeout={{
                enter: 500,
                exit: 350
            }}
            classNames={'alert'}
            mountOnEnter
            unmountOnExit>

            <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
                {alert.text}
                <button onClick={hide} type='button' className='close' aria-label='Close'>
                    <span aria-hidden='true'>&times;</span>
                </button>
            </div>
        </CSSTransition>
    )
}