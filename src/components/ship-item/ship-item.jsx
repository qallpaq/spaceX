import React from "react";
import './ship-item.scss';
import {Link} from "react-router-dom";


const ShipItem = ({ship}) => {
    return (
        <>
            <div className="ship__img-wrapper">
                <img className='ship-img' src={ship.image} alt="ship"/>
            </div>

            <div className='ship__item-row'>
                <h1 className='ship__item-name'><i>{ship.ship_name}</i></h1>
            </div>

            <div className='btn-wrapper'>
                <button className='btn-ship'>
                    <Link to={`/ships/${ship.ship_id}`}>View Details</Link>
                </button>
            </div>
        </>
    );
};

export default ShipItem;