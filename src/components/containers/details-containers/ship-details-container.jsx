import React, {useEffect} from "react";
import ShipDetails from "../../ship-details/ship-details";
import Spinner from "../../spinner";
import {connect} from "react-redux";
import {getShip} from "../../../thunk";


const ShipDetailsContainer = ({id, isFetching, shipsDetails, getShip}) => {

    useEffect(() => {
        getShip(id)
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
    getShip
};

export default connect(mapStateToProps, mapDispatchToProps)(ShipDetailsContainer);