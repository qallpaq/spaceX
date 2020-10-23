import ShipItem from "../ship-item";
import React from "react";
import './ship-list.scss';


const ShipList = ({ships, totalShipsCount, pageSize, currentPage, setPage, defaultTheme}) => {

    const arrayOfButtons = Math.ceil(totalShipsCount / pageSize);
    const pages = [];
    for (let i = 1; i <= arrayOfButtons; i++) {
        pages.push(i)
    }

    return (
        <div className='container'>
            <div className='ship-list__pages'>
                {pages.map((el, idx) => {
                    return <button
                        className={`ship-list__pages-btn ${el === currentPage && 'active'} ${!defaultTheme ? 'ship-list__pages-btn_dark' : null}`}
                        key={idx}
                        onClick={() => setPage(el)}>{el}</button>
                })}
            </div>
            <ul className='ship-list'>
                {
                    ships.map((ship) => {
                        return (
                            <li className={`ship-list__item ${!defaultTheme ? 'ship-list__item_dark' : null}`}
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