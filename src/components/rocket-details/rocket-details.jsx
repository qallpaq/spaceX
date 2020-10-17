import React from "react";
import './rocket-details.scss';


const RocketDetails = ({rocketDetails}) => {
    const {flickr_images, rocket_name, active, description, stages, boosters, first_flight} = rocketDetails;

    const isActive = active ? 'YES' : 'NO'

    return (
        <div className='rocket-details animation-active'>
            <div className='rocket-details__img-wrapper'>
                <img className='rocket-details__img' src={flickr_images} alt="rocket"/>
            </div>

            <div className='rocket-details__info'>
                <div className='rocket-details__row'><span>{rocket_name}</span></div>
                <div className='rocket-details__row'><span>description:</span> {description}</div>
                <div className='rocket-details__row'><span>active:</span> {isActive}</div>
                <div className='rocket-details__row'><span>stages:</span> {stages}</div>
                <div className='rocket-details__row'><span>boosters:</span> {boosters}</div>
                <div className='rocket-details__row'><span>first flight:</span> {first_flight}</div>
            </div>
        </div>
    );
};

export default RocketDetails;