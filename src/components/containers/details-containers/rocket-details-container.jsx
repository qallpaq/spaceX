import React, {useEffect} from "react";
import {connect} from "react-redux";
import Spinner from "../../spinner";
import Details from "../../details";
import {getRocket} from "../../../thunk";


const RocketDetailsContainer = ({id, isFetching, rocketDetails, getRocket}) => {

    useEffect(() => {
        getRocket(id)
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
    getRocket
};

export default connect(mapStateToProps, mapDispatchToProps)(RocketDetailsContainer);