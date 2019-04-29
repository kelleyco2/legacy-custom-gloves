const initialState = {
    colors: ['red', 'maroon', 'royalblue', 'navy', 'deepskyblue', 'green', 'darkgreen', 'orange', 'purple', 'pink', 'gold', 'blanchedalmond', 'saddlebrown', 'ghostwhite', 'dimgray', 'black']
}

const USER_LOGGED_IN = 'USER_LOGGED_IN'

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case USER_LOGGED_IN:
            return { ...state};
    
        default:
            return state;
    }
}