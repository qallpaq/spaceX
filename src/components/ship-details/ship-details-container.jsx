import React, {useEffect} from "react";
import './ship-details.scss';
import {useSpace} from "../space-context/space-context";
import {connect} from "react-redux";
import {shipDetailsLoaded} from "../../actions";
import ShipDetails from "./ship-details";


const ShipDetailsContainer = ({id, shipsDetails, shipDetailsLoaded}) => {
    const spaceX = useSpace();

    useEffect(() => {
        spaceX.getAllShips().then((ship) => shipDetailsLoaded(ship.find(el => el.ship_id === id)));
    }, [id, shipDetailsLoaded]);

    return <ShipDetails shipsDetails={shipsDetails}/>
};

const mapStateToProps = ({shipsDetails}) => {
    return {shipsDetails}
};

const mapDispatchToProps = {
    shipDetailsLoaded
};

export default connect(mapStateToProps, mapDispatchToProps)(ShipDetailsContainer);