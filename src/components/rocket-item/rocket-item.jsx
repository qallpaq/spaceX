import React from "react";
import './rocket-item.scss';
import {Link} from "react-router-dom";
import {withRouter} from "react-router";


const RocketItem = ({rocket, history}) => {
    return (
        <div className='rocket__item' onClick={() => history.push(`/rockets/${rocket.id}`)}>
            <div className='rocket-img-wrapper'>
                <img className='rocket__img' src={rocket.flickr_images[1]} alt="rocket"/>
            </div>

            <div className='rocket__item-info'>
                <div className='rocket__item-row'><h1 className='rocket-info__name'>{rocket.rocket_name}</h1></div>
                <div className='rocket__item-row'><span>{rocket.country}</span></div>
                <div className='rocket__item-row'><span>{rocket.company}</span></div>
                <div className='rocket__item-row'><span>STAGES:</span> {rocket.stages}</div>
                <div className='btn-wrapper'>
                    <button className='btn-rocket'>
                        <Link to={`/rockets/${rocket.id}`}>View Details</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};


export default withRouter(RocketItem);