import React, {useEffect} from "react";
import {connect} from "react-redux";
import {useSpace} from "../../space-context/space-context";
import Spinner from "../../spinner";
import Details from "../../details";
import {dragonsDetailsLoaded, toggleIsFetching} from "../../../actions";


const DragonDetailsContainer = ({dragonsDetails, dragonsDetailsLoaded, id, isFetching, toggleIsFetching}) => {
    const spaceX = useSpace();

    useEffect(() => {
        toggleIsFetching(true);
        spaceX.getDragon(id)
            .then((res) => {
                dragonsDetailsLoaded(res);
                toggleIsFetching(false);
            })
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
    dragonsDetailsLoaded,
    toggleIsFetching
};

export default connect(mapStateToProps, mapDispatchToProps)(DragonDetailsContainer);