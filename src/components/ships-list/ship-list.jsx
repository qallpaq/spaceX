import ShipItem from "../ship-item";
import React from "react";
import './ship-list.scss';


const ShipList = ({ships}) => {
    return (
        <div className='container'>
            <ul className='ship-list animation-active'>
                {
                    ships.map((ship) => {
                        return (
                            <li className='ship-list__item' key={ship.ship_id}>
                                <ShipItem ship={ship}/>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default ShipList;