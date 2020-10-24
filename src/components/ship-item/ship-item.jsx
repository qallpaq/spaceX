import React from "react";
import './ship-item.scss';
import {Link} from "react-router-dom";


const ShipItem = ({ship}) => {
    return (
        <Link to={`/ships/${ship.ship_id}`}>
            <div className="item__list-img-wrapper"
                 style={{background: `url(${ship.image}) no-repeat center`, 'backgroundSize': 'cover'}}>
            </div>

            <div className='item__list-row'>
                <h1 className='item__title'>{ship.ship_name}</h1>
            </div>
        </Link>

    );
};


export default ShipItem;