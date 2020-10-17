import React, {useEffect} from "react";
import {connect} from "react-redux";
import {useSpace} from "../space-context/space-context";
import {rocketDetailsLoaded} from "../../actions";
import RocketDetails from "./rocket-details";


const RocketDetailsContainer = ({id, rocketDetails, rocketDetailsLoaded}) => {
    const spaceX = useSpace();

    useEffect(() => {
        spaceX.getRocket(id - 1).then((rocket) => rocketDetailsLoaded(rocket));
        console.log('render');
    }, [id]);

    return <RocketDetails rocketDetails={rocketDetails}/>
};

const mapStateToProps = ({rocketDetails}) => {
    return {
        rocketDetails
    }
};

const mapDispatchToProps = {
    rocketDetailsLoaded
};

export default connect(mapStateToProps, mapDispatchToProps)(RocketDetailsContainer);