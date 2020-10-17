import React, {useEffect} from "react";
import './ship-list.scss';
import {shipsLoaded, toggleIsFetching} from "../../actions";
import {useSpace} from "../space-context/space-context";
import {connect} from "react-redux";
import ShipList from "./ship-list";
import Spinner from "../spinner";


const ShipsListContainer = ({ships, shipsLoaded, isFetching, toggleIsFetching}) => {
    const spaceX = useSpace();

    useEffect(() => {
        toggleIsFetching(true)
        spaceX.getAllShips()
            .then((ships) => {
                toggleIsFetching(false)
                shipsLoaded(ships)
            })
    }, []);

    if (isFetching) {
        return <Spinner/>
    }

    return <ShipList ships={ships}/>
};

const mapStateToProps = ({ships, isFetching}) => {
    return {ships, isFetching}
};

const mapDispatchToProps = {
    shipsLoaded,
    toggleIsFetching
};

export default connect(mapStateToProps, mapDispatchToProps)(ShipsListContainer);