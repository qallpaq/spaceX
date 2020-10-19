import React from "react";
import './rocket-list.scss';
import RocketItem from "../rocket-item";
import {connect} from "react-redux";


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


const mapStateToProps = ({rockets}) => {
    return {rockets}
};

export default connect(mapStateToProps)(RocketsList);