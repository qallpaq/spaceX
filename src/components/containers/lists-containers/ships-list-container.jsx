import React, {useEffect} from "react";
import {useSpace} from "../../space-context/space-context";
import Spinner from "../../spinner";
import ShipList from "../../ships-list/ship-list";
import {setCurrentPage, setPage, shipsLoaded, toggleIsFetching} from "../../../actions";
import {connect} from "react-redux";


const ShipsListContainer = ({shipsLoaded, isFetching, toggleIsFetching, currentPage, ships, totalShipsCount, pageSize, setPage, setCurrentPage}) => {
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

    return <ShipList ships={ships}
                     totalShipsCount={totalShipsCount}
                     pageSize={pageSize}
                     currentPage={currentPage}
                     setPage={setPage}/>
};


const mapStateToProps = ({basic: {isFetching}, ships: {pageSize, currentPage, ships, totalShipsCount}}) => {
    return {
        isFetching,
        pageSize,
        currentPage,
        ships,
        totalShipsCount,
    }
};

const mapDispatchToProps = {
    shipsLoaded,
    toggleIsFetching,
    setPage,
    setCurrentPage
};

export default connect(mapStateToProps, mapDispatchToProps)(ShipsListContainer);