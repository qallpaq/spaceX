const rocketsLoaded = (newRockets) => ({type: 'ROCKETS_LOADED', payload: newRockets});
const rocketDetailsLoaded = (details) => ({type: 'ROCKETS_DETAILS_LOADED', payload: details});
const shipsLoaded = (newShips) => ({type: 'SHIPS_LOADED', payload: newShips});
const shipDetailsLoaded = (details) => ({type: 'SHIP_DETAILS_LOADED', payload: details});
const toggleIsFetching = (isFetching) => ({type: 'TOGGLE_IS_FETCHING', payload: isFetching});
const setPage = (newPage) => ({type: 'SET_PAGE', payload: newPage});
const dragonsLoaded = (newDragons) => ({type: 'DRAGONS_LOADED', payload: newDragons});
const dragonsDetailsLoaded = (details) => ({type: 'DRAGONS_DETAILS_LOADED', payload: details});
const setCurrentPage = (newPage) => ({type: 'SET_CURRENT_PAGE', payload: newPage});


export {
    rocketsLoaded,
    rocketDetailsLoaded,
    shipsLoaded,
    shipDetailsLoaded,
    toggleIsFetching,
    setPage,
    dragonsLoaded,
    dragonsDetailsLoaded,
    setCurrentPage
};