import React, {useEffect} from "react";
import {useSpace} from "../../context/space-context/space-context";
import Spinner from "../../spinner";
import ItemList from "../../item-list";
import {rocketsLoaded, setCurrentPage, toggleIsFetching} from "../../../actions";
import {connect} from "react-redux";


const RocketsListContainer = ({rocketsLoaded, isFetching, rockets, toggleIsFetching, setCurrentPage}) => {
    const spaceX = useSpace();

    useEffect(() => {
        setCurrentPage(2);
        toggleIsFetching(true);
        spaceX.getAllRockets()
            .then(res => {
                rocketsLoaded(res.reverse());
                toggleIsFetching(false);
            })
    }, []);

    if (isFetching) {
        return <Spinner/>
    }

    return <ItemList item={rockets} type='rockets'/>
};


const mapStateToProps = ({basic: {isFetching, currentPage}, rockets: {rockets}}) => {
    return {isFetching, rockets, currentPage};
};

const mapDispatchToProps = {
    rocketsLoaded,
    toggleIsFetching,
    setCurrentPage
};

export default connect(mapStateToProps, mapDispatchToProps)(RocketsListContainer);