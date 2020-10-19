import React, {useEffect} from "react";
import './ship-list.scss';
import {shipsLoaded, toggleIsFetching} from "../../actions";
import {useSpace} from "../space-context/space-context";
import {connect} from "react-redux";
import ShipList from "./ship-list";
import Spinner from "../spinner";


const ShipsListContainer = ({shipsLoaded, isFetching, toggleIsFetching, currentPage}) => {
    const spaceX = useSpace();

    useEffect(() => {
        toggleIsFetching(true)
        spaceX.getAllShips(currentPage)
            .then((ships) => {
                shipsLoaded(ships)
                toggleIsFetching(false)
            })
    }, [currentPage]);

    if (isFetching) {
        return <Spinner/>
    }

    return <ShipList/>
};


const mapStateToProps = ({basic: {isFetching}, ships: {pageSize, currentPage}}) => {
    return {isFetching, pageSize, currentPage}
};

const mapDispatchToProps = {
    shipsLoaded,
    toggleIsFetching
};

export default connect(mapStateToProps, mapDispatchToProps)(ShipsListContainer);