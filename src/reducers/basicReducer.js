const initialState = {
    isFetching: true,
    defaultTheme: true
};

const basicReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_IS_FETCHING':
            return {
                ...state,
                isFetching: action.payload
            }
        case 'CHANGE_DEFAULT_THEME':
            return {
                ...state,
                defaultTheme: !state.defaultTheme
            }
        default:
            return state;
    }
};

export default basicReducer;