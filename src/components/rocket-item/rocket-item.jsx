import React from "react";
import './rocket-item.scss';
import {withRouter} from "react-router";
import {connect} from "react-redux";


const RocketItem = ({rocket, history, defaultTheme}) => {
    return (
        <div className={`rocket__item ${!defaultTheme ? 'rocket__item_dark' : null}`}
             onClick={() => history.push(`/rockets/${rocket.id}`)}>
            <div className='rocket-img-wrapper'>
                <img className='rocket__img' src={rocket.flickr_images[1]} alt="rocket"/>
            </div>

            <div className='rocket__item-info'>
                <div className='rocket__item-row'><h1 className='rocket-info__name'>{rocket.rocket_name}</h1></div>
                <div className='rocket__item-row'><span>country: {rocket.country}</span></div>
                <div className='rocket__item-row'><span>company: {rocket.company}</span></div>
                <div className='rocket__item-row'><span>STAGES:</span> {rocket.stages}</div>
            </div>
        </div>
    );
};

const mapStateToProps = ({basic: {defaultTheme}}) => {
    return {defaultTheme}
};

export default withRouter(connect(mapStateToProps)(RocketItem));