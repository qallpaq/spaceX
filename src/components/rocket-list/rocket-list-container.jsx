import {useSpace} from "../space-context/space-context";
import React, {useEffect} from "react";
import {rocketsLoaded, toggleIsFetching} from "../../actions";
import {connect} from "react-redux";
import RocketsList from "./rocket-list";
import Spinner from "../spinner";


const RocketsListContainer = ({rockets, rocketsLoaded, isFetching, toggleIsFetching}) => {
    const spaceX = useSpace();

    useEffect(() => {
        toggleIsFetching(true)
        spaceX.getAllRockets()
            .then(res => {
                toggleIsFetching(false)
                rocketsLoaded(res);
            })
    }, []);


    if (isFetching) {
        return <Spinner/>
    }

    return <RocketsList rockets={rockets}/>
};

const mapStateToProps = ({rockets, isFetching}) => {
    return {
        rockets,
        isFetching
    };
};

const mapDispatchToProps = {
    rocketsLoaded,
    toggleIsFetching
};

export default connect(mapStateToProps, mapDispatchToProps)(RocketsListContainer);