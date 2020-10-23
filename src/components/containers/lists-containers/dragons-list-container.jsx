import React, {useEffect} from "react";
import {useSpace} from "../../space-context/space-context";
import Spinner from "../../spinner";
import ItemList from "../../item-list";
import {dragonsLoaded, toggleIsFetching} from "../../../actions";
import {connect} from "react-redux";


const DragonListContainer = ({dragons, dragonsLoaded, isFetching, toggleIsFetching}) => {
    const spaceX = useSpace();

    useEffect(() => {
        toggleIsFetching(true)
        spaceX.getAllDragons()
            .then((res) => {
                dragonsLoaded(res);
                toggleIsFetching(false);
            })
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
    dragonsLoaded,
    toggleIsFetching
};

export default connect(mapStateToProps, mapDispatchToProps)(DragonListContainer);