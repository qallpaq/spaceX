import ShipItem from "../ship-item";
import React from "react";
import './ship-list.scss';


const ShipList = ({ships, setPage, currentPage}) => {

    const arrayForButtons = [1, 2];

    return (
        <>
            <ul className='items__list items__list-ships'>
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

            <div className='ship__list-pages'>
                {
                    arrayForButtons.map(el => {
                        return (
                            <button className={`ship__list-button ${currentPage === el ? 'active' : null}`}
                                    onClick={() => setPage(el)}
                                    key={el}>
                                {el}
                            </button>
                        );
                    })
                }
            </div>
        </>
    );
};


export default ShipList;