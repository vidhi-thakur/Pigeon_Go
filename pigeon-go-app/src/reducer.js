export const initialState = {
    user: null
}

const reducer = (state, action) => {
    console.log("Let us see user action",action.user)
    switch (action) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }

        default:
            return state
    }
}

export default reducer