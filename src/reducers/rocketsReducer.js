const initialState = {
    rockets: [],
    rocketDetails: [],
};

const rocketsReducer = (state = initialState, action) => {
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
        default:
            return state;
    }
};

export default rocketsReducer;