const initialState = {
    isFetching: true,
};

const basicReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_IS_FETCHING':
            return {
                ...state,
                isFetching: action.payload
            }
        default:
            return state;
    }
};

export default basicReducer;