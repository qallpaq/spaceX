const rocketsLoaded = (newRockets) => ({type: 'ROCKETS_LOADED', payload: newRockets});
const rocketDetailsLoaded = (details) => ({type: 'ROCKETS_DETAILS_LOADED', payload: details});
const shipsLoaded = (newShips) => ({type: 'SHIPS_LOADED', payload: newShips});
const shipDetailsLoaded = (details) => ({type: 'SHIP_DETAILS_LOADED', payload: details});
const toggleIsFetching = (isFetching) => ({type: 'TOGGLE_IS_FETCHING', payload: isFetching})

export {
    rocketsLoaded,
    rocketDetailsLoaded,
    shipsLoaded,
    shipDetailsLoaded,
    toggleIsFetching,
}
