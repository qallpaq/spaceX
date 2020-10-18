import React, {useEffect} from "react";
import {useSpace} from "../space-context/space-context";
import {connect} from "react-redux";
import {shipDetailsLoaded, toggleIsFetching} from "../../actions";
import ShipDetails from "./ship-details";
import Spinner from "../spinner";


const ShipDetailsContainer = ({id, shipsDetails, shipDetailsLoaded, isFetching, toggleIsFetching}) => {
    const spaceX = useSpace();

    useEffect(() => {
        toggleIsFetching(true);
        spaceX.getAllShips()
            .then(ship => {
                toggleIsFetching(false)
                shipDetailsLoaded(ship.find(el => el.ship_id === id))
            })
    }, []);

    if (isFetching) {
        return <Spinner/>
    }

    return <ShipDetails shipsDetails={shipsDetails}/>
};

const mapStateToProps = ({shipsDetails, isFetching}) => {
    return {shipsDetails, isFetching}
};

const mapDispatchToProps = {
    shipDetailsLoaded,
    toggleIsFetching
};

export default connect(mapStateToProps, mapDispatchToProps)(ShipDetailsContainer);