import {useSpace} from "../space-context/space-context";
import React, {useEffect} from "react";
import {rocketsLoaded, toggleIsFetching} from "../../actions";
import {connect} from "react-redux";
import RocketsList from "./rocket-list";
import Spinner from "../spinner";


const RocketsListContainer = ({rocketsLoaded, isFetching, toggleIsFetching}) => {
    const spaceX = useSpace();

    useEffect(() => {
        toggleIsFetching(true)
        console.log('rocket-list-container render')
        spaceX.getAllRockets()
            .then(res => {
                rocketsLoaded(res);
                toggleIsFetching(false)
            })
    }, []);

    if (isFetching) {
        return <Spinner/>
    }

    return <RocketsList/>
};


const mapStateToProps = ({isFetching}) => {
    return {isFetching};
};

const mapDispatchToProps = {
    rocketsLoaded,
    toggleIsFetching
};

export default connect(mapStateToProps, mapDispatchToProps)(RocketsListContainer);