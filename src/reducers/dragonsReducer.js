const initialState = {
    dragons: [],
    dragonsDetails: [],
};

const dragonsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DRAGONS_LOADED':
            return {
                ...state,
                dragons: action.payload
            }
        case 'DRAGONS_DETAILS_LOADED':
            return {
                ...state,
                dragonsDetails: action.payload
            }
        default:
            return state;
    }
};


export default dragonsReducer;