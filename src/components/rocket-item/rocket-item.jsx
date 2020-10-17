import React from "react";
import './rocket-item.scss';
import {withRouter} from "react-router";


const RocketItem = ({rocket, history}) => {
    return (
        <div className='rocket__item'>
            <div className='rocket-img-wrapper'>
                <img className='rocket__img' src={rocket.flickr_images[1]} alt="rocket"/>
            </div>

            <div className='rocket__item-info'>
                <div className='rocket__item-row'><span>{rocket.rocket_name}</span></div>
                <div className='rocket__item-row'><span>{rocket.country}</span></div>
                <div className='rocket__item-row'><span>{rocket.company}</span></div>
                <div className='rocket__item-row'><span>STAGES:</span> {rocket.stages}</div>
                <div className='btn-wrapper'>
                    <button
                        className='btn-rocket'
                        onClick={(id) => history.push(`/rockets/${rocket.id}`)}>
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default withRouter(RocketItem);