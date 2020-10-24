import React, {useEffect} from "react";
import {useSpace} from "../../space-context/space-context";
import Spinner from "../../spinner";
import ShipList from "../../ships-list/ship-list";
import {setCurrentPage, shipsLoaded, toggleIsFetching} from "../../../actions";
import {connect} from "react-redux";


const ShipsListContainer = ({shipsLoaded, isFetching, toggleIsFetching, ships, setCurrentPage}) => {
    const spaceX = useSpace();

    useEffect(() => {
        setCurrentPage(4);
        toggleIsFetching(true);
        spaceX.getAllShips()
            .then((ships) => {
                shipsLoaded(ships);
                toggleIsFetching(false);
            })
    }, []);

    if (isFetching) {
        return <Spinner/>
    }

    return <ShipList ships={ships}/>
};


const mapStateToProps = ({basic: {isFetching}, ships: {ships}}) => {
    return {
        isFetching,
        ships,
    }
};

const mapDispatchToProps = {
    shipsLoaded,
    toggleIsFetching,
    setCurrentPage
};

export default connect(mapStateToProps, mapDispatchToProps)(ShipsListContainer);