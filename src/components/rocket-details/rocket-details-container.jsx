import React, {useEffect} from "react";
import {connect} from "react-redux";
import {useSpace} from "../space-context/space-context";
import {rocketDetailsLoaded, toggleIsFetching} from "../../actions";
import RocketDetails from "./rocket-details";
import Spinner from "../spinner";


const RocketDetailsContainer = ({id, rocketDetails, rocketDetailsLoaded, isFetching, toggleIsFetching}) => {
    const spaceX = useSpace();

    useEffect(() => {
        toggleIsFetching(true)
        spaceX.getRocket(id - 1)
            .then(rocket => {
                toggleIsFetching(false)
                rocketDetailsLoaded(rocket);
            })
    }, []);

    if (isFetching) {
        return <Spinner/>
    }

    return <RocketDetails rocketDetails={rocketDetails}/>
};

const mapStateToProps = ({rocketDetails, isFetching}) => {
    return {rocketDetails, isFetching}
};

const mapDispatchToProps = {
    rocketDetailsLoaded,
    toggleIsFetching
};

export default connect(mapStateToProps, mapDispatchToProps)(RocketDetailsContainer);