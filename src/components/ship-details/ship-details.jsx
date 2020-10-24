import React from "react";
import './ship-details.scss';


const ShipDetails = ({shipsDetails}) => {
    const isActive = shipsDetails.active ? 'YES' : 'NO';
    return (
        <div className='container'>
            <div className='ship-details animation-active'>
                <div className='ship-details__img-wrapper'>
                    <img className='ship__img' src={shipsDetails.image} alt="ship"/>
                </div>

                <div className='ship-details__info'>
                    <div className='ship-details__row'>
                        <h1 className='ship-details__row--name'>{shipsDetails.ship_name}</h1>
                    </div>
                    <div className='ship-details__row'>
                        <h2>{shipsDetails.home_port}</h2>
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
            </div>
        </div>
    );
};


export default ShipDetails;