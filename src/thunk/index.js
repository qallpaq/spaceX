import {
    dragonsDetailsLoaded,
    dragonsLoaded,
    rocketDetailsLoaded,
    rocketsLoaded,
    setCurrentPage, shipDetailsLoaded,
    shipsLoaded,
    toggleIsFetching
} from "../actions";
import SpaceServer from "../services/space-server";


const spaceServer = new SpaceServer();

const getItems = (getData, currentPage, itemsLoaded) => (currentPageForShips) => async (dispatch) => {
    dispatch(setCurrentPage(currentPage));
    dispatch(toggleIsFetching(true));

    try {
        const response = await getData(currentPageForShips)
        dispatch(itemsLoaded(response));
        dispatch(toggleIsFetching(false));
    } catch (e) {
        alert(e)
        dispatch(toggleIsFetching(false));
    }
};

export const getRockets = getItems(spaceServer.getAllRockets, 2, rocketsLoaded);
export const getDragons = getItems(spaceServer.getAllDragons, 3, dragonsLoaded);
export const getShips = getItems(spaceServer.getAllShips, 4, shipsLoaded);

export const getRocket = getItems(spaceServer.getRocket, 2, rocketDetailsLoaded);
export const getDragon = getItems(spaceServer.getDragon, 3, dragonsDetailsLoaded);
export const getShip = getItems(spaceServer.getShip, 4, shipDetailsLoaded);