import { createStore } from 'redux'
const INITIAL_STATE = {
    excludes: {},
    apostas: []
}

function bets(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'EXCLUDE_NUMBER':
            return { ...state, excludes: action.excludes };
        case 'SET_APOSTAS':
            return { ...state, apostas: action.apostas };
        default:
            return state;
    }
}

const store = createStore(bets);

export default store;