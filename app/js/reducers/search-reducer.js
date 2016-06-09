import * as constants from '../constants/action-types';

const initialState = {
    search: ''
};

export default function searchReducer(state = initialState, action = {}) {
    switch (action.type) {
        case constants.SET_SEARCH:
            return {
                ...state,
                search: action.search
            };
        default:
            return state;
    }
}
