
const initState = {
    token: "",
    refreshToken: "",
    isAuthenticated: false,
    isRefreshing: false
}

export const authReducer = (state = initState, action) => {

    if (action.type === "SAVE_TOKEN") {

        return {
            ...state,
            token: action.payload.token,
            refreshToken: action.payload.refreshToken,
            isAuthenticated: true
        }

    }
    if (action.type === "REMOVE_TOKEN") {

        return {
            ...initState
        }

    }
    if (action.type === "START_REFRESHING") {

        return {
            ...state,
            isRefreshing: true
        }

    }
    if (action.type === "STOP_REFRESHING") {

        return {
            ...state,
            isRefreshing: false
        }

    }
    return state;
}