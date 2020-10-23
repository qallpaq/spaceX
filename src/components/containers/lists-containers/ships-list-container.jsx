import React, {useEffect} from "react";
import {useSpace} from "../../space-context/space-context";
import Spinner from "../../spinner";
import ShipList from "../../ships-list/ship-list";
import {setPage, shipsLoaded, toggleIsFetching} from "../../../actions";
import {connect} from "react-redux";


const ShipsListContainer = ({shipsLoaded, isFetching, toggleIsFetching, currentPage, ships, totalShipsCount, pageSize, setPage, defaultTheme}) => {
    const spaceX = useSpace();

    useEffect(() => {
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
                     setPage={setPage}
                     defaultTheme={defaultTheme}/>
};


const mapStateToProps = ({basic: {isFetching, defaultTheme}, ships: {pageSize, currentPage, ships, totalShipsCount}}) => {
    return {
        isFetching,
        pageSize,
        currentPage,
        ships,
        totalShipsCount,
        defaultTheme
    }
};

const mapDispatchToProps = {
    shipsLoaded,
    toggleIsFetching,
    setPage
};

export default connect(mapStateToProps, mapDispatchToProps)(ShipsListContainer);