import React, {useEffect} from "react";
import Spinner from "../../spinner";
import ShipList from "../../ships-list/ship-list";
import {connect} from "react-redux";
import {getShips} from "../../../thunk";
import {setPage} from "../../../actions";


const ShipsListContainer = ({isFetching, ships, currentPage, setPage, getShips}) => {

    useEffect(() => {
        getShips(currentPage)
    }, [currentPage]);

    if (isFetching) {
        return <Spinner/>
    }

    return <ShipList ships={ships}
                     setPage={setPage}
                     currentPage={currentPage}/>
};


const mapStateToProps = ({basic: {isFetching}, ships: {ships, currentPage}}) => {
    return {
        isFetching,
        ships,
        currentPage
    }
};

const mapDispatchToProps = {
    getShips,
    setPage
};

export default connect(mapStateToProps, mapDispatchToProps)(ShipsListContainer);