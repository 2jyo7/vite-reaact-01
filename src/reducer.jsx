const reducer = (state, action) => {

    switch (action.type) {
        case "SERVICES_DATA":
            return {
                ...state,
                services: action.payload,
            }
    
    
    }

    return state;
};
export default reducer;