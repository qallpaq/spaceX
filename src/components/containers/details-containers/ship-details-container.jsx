import React, {useEffect} from "react";
import {useSpace} from "../../space-context/space-context";
import ShipDetails from "../../ship-details/ship-details";
import Spinner from "../../spinner";
import {setCurrentPage, shipDetailsLoaded, toggleIsFetching} from "../../../actions";
import {connect} from "react-redux";


const ShipDetailsContainer = ({id, shipDetailsLoaded, isFetching, toggleIsFetching, shipsDetails, setCurrentPage}) => {
    const spaceX = useSpace();

    useEffect(() => {
        setCurrentPage(4);
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
    toggleIsFetching,
    setCurrentPage
};

export default connect(mapStateToProps, mapDispatchToProps)(ShipDetailsContainer);