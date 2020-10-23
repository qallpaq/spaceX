import React, {useEffect} from "react";
import {useSpace} from "../../space-context/space-context";
import Spinner from "../../spinner";
import ItemList from "../../item-list";
import {rocketsLoaded, toggleIsFetching} from "../../../actions";
import {connect} from "react-redux";


const RocketsListContainer = ({rocketsLoaded, isFetching, rockets, toggleIsFetching}) => {
    const spaceX = useSpace();

    useEffect(() => {
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


const mapStateToProps = ({basic: {isFetching}, rockets: {rockets}}) => {
    return {isFetching, rockets};
};

const mapDispatchToProps = {
    rocketsLoaded,
    toggleIsFetching
};

export default connect(mapStateToProps, mapDispatchToProps)(RocketsListContainer);