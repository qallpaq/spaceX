import {useSpace} from "../space-context/space-context";
import React, {useEffect} from "react";
import {rocketsLoaded, toggleIsFetching} from "../../actions";
import {connect} from "react-redux";
import RocketsList from "./rocket-list";
import Spinner from "../spinner";


const RocketsListContainer = ({rocketsLoaded, isFetching, rockets, toggleIsFetching}) => {
    const spaceX = useSpace();

    useEffect(() => {
        toggleIsFetching(true);
        spaceX.getAllRockets()
            .then(res => {
                rocketsLoaded(res);
                toggleIsFetching(false);
            })
    }, []);

    if (isFetching) {
        return <Spinner/>
    }

    return <RocketsList rockets={rockets}/>
};


const mapStateToProps = ({basic: {isFetching}, rockets: {rockets}}) => {
    return {isFetching, rockets};
};

const mapDispatchToProps = {
    rocketsLoaded,
    toggleIsFetching
};

export default connect(mapStateToProps, mapDispatchToProps)(RocketsListContainer);