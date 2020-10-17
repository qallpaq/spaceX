import React, {useEffect} from "react";
import './ship-list.scss';
import {shipsLoaded} from "../../actions";
import {useSpace} from "../space-context/space-context";
import {connect} from "react-redux";
import ShipList from "./ship-list";


const ShipsListContainer = ({ships, shipsLoaded}) => {
    const spaceX = useSpace();

    useEffect(() => {
        spaceX.getAllShips().then((ships) => shipsLoaded(ships));
        console.log('render');
    }, []);

    return <ShipList ships={ships}/>
};


const mapStateToProps = ({ships}) => {
    return {ships}
};

const mapDispatchToProps = {
    shipsLoaded
};

export default connect(mapStateToProps, mapDispatchToProps)(ShipsListContainer);