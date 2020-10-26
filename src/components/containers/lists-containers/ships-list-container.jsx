import React, {useEffect} from "react";
import {useSpace} from "../../context/space-context/space-context";
import Spinner from "../../spinner";
import ShipList from "../../ships-list/ship-list";
import {setCurrentPage, setPage, shipsLoaded, toggleIsFetching} from "../../../actions";
import {connect} from "react-redux";


const ShipsListContainer = ({shipsLoaded, isFetching, toggleIsFetching, ships, setCurrentPage, currentPage, setPage}) => {
    const spaceX = useSpace();

    useEffect(() => {
        setCurrentPage(4);
        toggleIsFetching(true);
        spaceX.getAllShips(currentPage)
            .then((ships) => {
                shipsLoaded(ships);
                toggleIsFetching(false);
            })
    }, [currentPage]);

    if (isFetching) {
        return <Spinner/>
    }

    return <ShipList ships={ships} setPage={setPage} currentPage={currentPage}/>
};


const mapStateToProps = ({basic: {isFetching}, ships: {ships, currentPage}}) => {
    return {
        isFetching,
        ships,
        currentPage
    }
};

const mapDispatchToProps = {
    shipsLoaded,
    toggleIsFetching,
    setCurrentPage,
    setPage
};

export default connect(mapStateToProps, mapDispatchToProps)(ShipsListContainer);