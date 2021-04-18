const initialScreen = {
    activeScreen: 'Home'
}

const reducers = (state = initialScreen, action) => {
    switch(action.type) {
        case "CHANGE_SCREEN": return {
            ...state,
            activeScreen: action.payload
        }

        default: return state
    }
}

export default reducers