import ShipItem from "../ship-item";
import React from "react";
import './ship-list.scss';


const ShipList = ({ships}) => {

    return (
        <div className='container'>
            <ul className='items__list'>
                {
                    ships.map((ship) => {
                        return (
                            <li className={`items__list-element`}
                                key={ship.ship_id}>
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