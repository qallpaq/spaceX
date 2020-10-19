const initialState = {
    ships: [],
    pageSize: 5,
    totalShipsCount: 19,
    currentPage: 1,
    shipsDetails: [],
};

const shipsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SHIPS_LOADED':
            return {
                ...state,
                ships: action.payload
            }
        case 'SHIP_DETAILS_LOADED':
            return {
                ...state,
                shipsDetails: action.payload
            }
        case 'SET_PAGE':
            return {
                ...state,
                currentPage: action.payload
            }
        default:
            return state;
    }
};

export default shipsReducer;