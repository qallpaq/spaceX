const initialState = {
    isFetching: false,
    currentPage: 1
};

const basicReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_IS_FETCHING':
            return {
                ...state,
                isFetching: action.payload
            }
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.payload
            }
        default:
            return state;
    }
};

export default basicReducer;