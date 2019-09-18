
export default function counterReducer(state = {value: 0}, action) {
    console.log(action);
    switch(action.type) {
        case 'INCREMENT_COUNTER':
            return {
                ...state,
                value: state.value + 1
            }
        default:
            return state;
    }
};