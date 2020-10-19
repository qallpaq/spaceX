import ShipItem from "../ship-item";
import React from "react";
import './ship-list.scss';
import {connect} from "react-redux";


const ShipList = ({ships}) => {

    const buttonsCount = Math.round(ships.length / 4);
    const arrayOfButtons = [];

    for (let i = 1; i <= buttonsCount; i++) {
        arrayOfButtons.push(i)
    }

    return (
        <div className='container'>
            {arrayOfButtons.map((el) => <button key={el}>{el}</button>)}
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

const mapStateToProps = ({ships}) => {
    return {ships}
};

export default connect(mapStateToProps)(ShipList);