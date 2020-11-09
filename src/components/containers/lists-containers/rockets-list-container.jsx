import React, {useEffect} from "react";
import Spinner from "../../spinner";
import ItemList from "../../item-list";
import {connect} from "react-redux";
import {getRockets} from "../../../thunk";


const RocketsListContainer = ({isFetching, rockets, getRockets}) => {

    useEffect(() => {
        getRockets();
    }, []);

    if (isFetching) {
        return <Spinner/>
    }

    return <ItemList item={rockets} type='rockets'/>
};


const mapStateToProps = ({rockets: {rockets}, basic: {isFetching}}) => {
    return {rockets, isFetching};
};

const mapDispatchToProps = {
    getRockets
};

export default connect(mapStateToProps, mapDispatchToProps)(RocketsListContainer);