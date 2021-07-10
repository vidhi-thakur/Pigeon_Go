export const initialState = {
    user: null
}

export const ACTION = {
    SET_USER: "SET_USER",
}

const reducer = (state, action) => {
    console.log(action.user)
    switch (action) {
        case ACTION.SET_USER:
            return {
                ...state,
                user: action.user
            }

        default:
            return state
    }
}

export default reducer