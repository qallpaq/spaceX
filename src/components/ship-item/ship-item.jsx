import React from "react";
import './ship-item.scss';
import {Link} from "react-router-dom";


const ShipItem = ({ship}) => {
    return (
        <Link to={`/ships/${ship.ship_id}`}>
            <div className="ship__img-wrapper">
                <img className='ship-img' src={ship.image} alt="ship"/>
            </div>

            <div className='ship__item-row'>
                <h1 className='ship__item-name'>{ship.ship_name}</h1>
            </div>
        </Link>

    );
};

export default ShipItem;