import React from "react";


const ShipDetails = ({shipsDetails}) => {
    const isActive = shipsDetails.active ? 'YES' : 'NO';
    return (
        <div className='ship-details animation-active'>
            <div className='ship-details__img-wrapper'>
                <img className='ship__img' src={shipsDetails.image} alt="ship"/>
            </div>
            <div className='ship-details__row'>
                {shipsDetails.ship_name}
            </div>
            <div className='ship-details__row'>
                {shipsDetails.home_port}
            </div>
            <div className='ship-details__row'>
                Mass {shipsDetails.weight_kg} (kg)
            </div>
            <div className='ship-details__row'>
                Birth of build {shipsDetails.year_built}
            </div>
            <div className='ship-details__row'>
                Active: {isActive}
            </div>
        </div>
    );
};

export default ShipDetails;