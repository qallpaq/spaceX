import React, {useEffect} from "react";
import {useSpace} from "../space-context/space-context";
import {connect} from "react-redux";
import {shipDetailsLoaded, toggleIsFetching} from "../../actions";
import ShipDetails from "./ship-details";
import Spinner from "../spinner";


const ShipDetailsContainer = ({id, shipDetailsLoaded, isFetching, toggleIsFetching, shipsDetails}) => {
    const spaceX = useSpace();

    useEffect(() => {
        toggleIsFetching(true);
        spaceX.getShip(id)
            .then(ship => {
                shipDetailsLoaded(ship)
                toggleIsFetching(false)
            })
    }, []);

    if (isFetching) {
        return <Spinner/>
    }

    return <ShipDetails shipsDetails={shipsDetails}/>
};

const mapStateToProps = ({basic: {isFetching}, ships: {shipsDetails}}) => {
    return {isFetching, shipsDetails}
};

const mapDispatchToProps = {
    shipDetailsLoaded,
    toggleIsFetching
};

export default connect(mapStateToProps, mapDispatchToProps)(ShipDetailsContainer);