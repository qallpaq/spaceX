import React, {useEffect} from "react";
import Spinner from "../../spinner";
import ItemList from "../../item-list";
import {connect} from "react-redux";
import {getDragons} from "../../../thunk";


const DragonListContainer = ({dragons, isFetching, getDragons}) => {

    useEffect(() => {
        getDragons()
    }, []);

    if (isFetching) {
        return <Spinner/>
    }

    return <ItemList item={dragons} type='dragons'/>;
};


const mapStateToProps = ({dragons: {dragons}, basic: {isFetching}}) => {
    return {dragons, isFetching}
};

const mapDispatchToProps = {
    getDragons
};

export default connect(mapStateToProps, mapDispatchToProps)(DragonListContainer);