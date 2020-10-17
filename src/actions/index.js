const rocketsLoaded = (newRockets) => {
    return {
        type: 'ROCKETS_LOADED',
        payload: newRockets
    }
};

const rocketDetailsLoaded = (details) => {
    return {
        type: 'ROCKETS_DETAILS_LOADED',
        payload: details
    }
};

const shipsLoaded = (newShips) => {
    return {
        type: 'SHIPS_LOADED',
        payload: newShips
    }
};

const shipDetailsLoaded = (details) => {
    return {
        type: 'SHIP_DETAILS_LOADED',
        payload: details
    }
};


export {
    rocketsLoaded,
    rocketDetailsLoaded,
    shipsLoaded,
    shipDetailsLoaded
}
