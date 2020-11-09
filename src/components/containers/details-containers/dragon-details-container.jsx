import React, {useEffect} from "react";
import {connect} from "react-redux";
import Spinner from "../../spinner";
import Details from "../../details";
import {getDragon} from "../../../thunk";


const DragonDetailsContainer = ({dragonsDetails, id, isFetching, getDragon}) => {

    useEffect(() => {
        getDragon(id)
    }, []);

    if (isFetching) {
        return <Spinner/>
    }

    return <Details details={dragonsDetails} type='dragons'/>
};


const mapStateToProps = ({dragons: {dragonsDetails}, basic: {isFetching}}) => {
    return {dragonsDetails, isFetching}
};

const mapDispatchToProps = {
    getDragon
};

export default connect(mapStateToProps, mapDispatchToProps)(DragonDetailsContainer);