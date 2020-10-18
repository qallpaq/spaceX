import React, {useEffect} from "react";
import {useSpace} from "../space-context/space-context";
import {connect} from "react-redux";
import {shipDetailsLoaded, toggleIsFetching} from "../../actions";
import ShipDetails from "./ship-details";
import Spinner from "../spinner";


const ShipDetailsContainer = ({id, shipDetailsLoaded, isFetching, toggleIsFetching}) => {
    const spaceX = useSpace();

    useEffect(() => {
        toggleIsFetching(true);
        spaceX.getAllShips()
            .then(ship => {
                shipDetailsLoaded(ship.find(el => el.ship_id === id))
                toggleIsFetching(false)
            })
    }, []);

    if (isFetching) {
        return <Spinner/>
    }

    return <ShipDetails/>
};

const mapStateToProps = ({isFetching}) => {
    return {isFetching}
};

const mapDispatchToProps = {
    shipDetailsLoaded,
    toggleIsFetching
};

export default connect(mapStateToProps, mapDispatchToProps)(ShipDetailsContainer);