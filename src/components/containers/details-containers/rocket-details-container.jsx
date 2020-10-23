import React, {useEffect} from "react";
import {connect} from "react-redux";
import {useSpace} from "../../space-context/space-context";
import Spinner from "../../spinner";
import {rocketDetailsLoaded, toggleIsFetching} from "../../../actions";
import Details from "../../details";


const RocketDetailsContainer = ({id, rocketDetailsLoaded, isFetching, toggleIsFetching, rocketDetails}) => {
    const spaceX = useSpace();

    useEffect(() => {
        toggleIsFetching(true);
        spaceX.getRocket(id)
            .then(rocket => {
                rocketDetailsLoaded(rocket);
                toggleIsFetching(false);
            })
    }, []);

    if (isFetching) {
        return <Spinner/>
    }

    return <Details details={rocketDetails} type='rockets'/>
};


const mapStateToProps = ({basic: {isFetching}, rockets: {rocketDetails}}) => {
    return {isFetching, rocketDetails}
};

const mapDispatchToProps = {
    rocketDetailsLoaded,
    toggleIsFetching
};

export default connect(mapStateToProps, mapDispatchToProps)(RocketDetailsContainer);