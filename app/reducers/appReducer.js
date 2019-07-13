const appReducer = (state = {
    isFetching: false,
    error: ""
}, action) => {
    const {payload} = action;
    switch (action.type) {
        case 'FETCH_START':
            return {...state, isFetching: true};
        case 'FETCH_SUCCESS':
            return {...state, isFetching: false, error: {}};
        case 'FETCH_FAIL':
            return {...state, isFetching: false, error: payload};
        default:
            return state;
    }
}

export default appReducer;