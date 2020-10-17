import {useSpace} from "../space-context/space-context";
import React, {useEffect} from "react";
import {rocketsLoaded} from "../../actions";
import {connect} from "react-redux";
import RocketsList from "./rocket-list";


const RocketsListContainer = ({rockets, rocketsLoaded}) => {
    const spaceX = useSpace();

    useEffect(() => {
        spaceX.getAllRockets().then((res) => rocketsLoaded(res));
        console.log('render')
    }, [rocketsLoaded, spaceX]);

    return <RocketsList rockets={rockets}/>
};

const mapStateToProps = ({rockets}) => {
    return {rockets};
};

const mapDispatchToProps = {
    rocketsLoaded
};

export default connect(mapStateToProps, mapDispatchToProps)(RocketsListContainer);