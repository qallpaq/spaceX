import React, {useEffect} from "react";
import {connect} from "react-redux";
import {useSpace} from "../space-context/space-context";
import {rocketDetailsLoaded, toggleIsFetching} from "../../actions";
import RocketDetails from "./rocket-details";
import Spinner from "../spinner";


const RocketDetailsContainer = ({id, rocketDetailsLoaded, isFetching, toggleIsFetching}) => {
    const spaceX = useSpace();

    useEffect(() => {
        toggleIsFetching(true)
        console.log('rocket-details-container render')
        spaceX.getRocket(id)
            .then(rocket => {
                rocketDetailsLoaded(rocket);
                toggleIsFetching(false)
            })
    }, []);

    if (isFetching) {
        return <Spinner/>
    }

    return <RocketDetails/>
};


const mapStateToProps = ({isFetching}) => {
    return {isFetching}
};

const mapDispatchToProps = {
    rocketDetailsLoaded,
    toggleIsFetching
};

export default connect(mapStateToProps, mapDispatchToProps)(RocketDetailsContainer);