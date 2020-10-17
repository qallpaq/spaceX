const initialState = {
    rockets: [],
    rocketDetails: [],
    ships: [],
    shipsDetails: [],
    isFetching: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ROCKETS_LOADED':
            return {
                ...state,
                rockets: action.payload
            }
        case 'ROCKETS_DETAILS_LOADED':
            return {
                ...state,
                rocketDetails: action.payload
            }
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
        case 'TOGGLE_IS_FETCHING':
            return {
                ...state,
                isFetching: action.payload
            }
        default:
            return state;
    }
};

export default reducer;