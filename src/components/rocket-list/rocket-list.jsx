import React from "react";
import './rocket-list.scss';
import RocketItem from "../rocket-item";


const RocketsList = ({rockets}) => {
    return (
        <ul className='rocket-list animation-active'>
            {
                rockets.map((rocket) => {
                    return (
                        <li className='rocket-list__item' key={rocket.id}>
                            <RocketItem rocket={rocket}/>
                        </li>
                    )
                })
            }
        </ul>
    );
};

export default RocketsList;