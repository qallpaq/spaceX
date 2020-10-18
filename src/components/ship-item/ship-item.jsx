import React from "react";
import './ship-item.scss';
import {withRouter} from "react-router";


const ShipItem = ({ship, history}) => {
    return (
        <>
            <div className="ship__img-wrapper">
                <img className='ship-img' src={ship.image} alt="ship"/>
            </div>

            <div className='ship__item-row'>
                <h1 className='ship__item-name'><i>{ship.ship_name}</i></h1>
            </div>

            <div className='btn-wrapper'>
                <button
                    className='btn-ship'
                    onClick={(id) => history.push(`/ships/${ship.ship_id}`)}>
                    View Details
                </button>
            </div>
        </>
    );
};

export default withRouter(ShipItem);