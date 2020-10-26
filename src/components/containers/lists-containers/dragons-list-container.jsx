import React, {useEffect} from "react";
import {useSpace} from "../../context/space-context/space-context";
import Spinner from "../../spinner";
import ItemList from "../../item-list";
import {dragonsLoaded, setCurrentPage, toggleIsFetching} from "../../../actions";
import {connect} from "react-redux";


const DragonListContainer = ({dragons, dragonsLoaded, isFetching, toggleIsFetching, setCurrentPage}) => {
    const spaceX = useSpace();

    useEffect(() => {
        setCurrentPage(3);
        toggleIsFetching(true);
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
    toggleIsFetching,
    setCurrentPage
};

export default connect(mapStateToProps, mapDispatchToProps)(DragonListContainer);