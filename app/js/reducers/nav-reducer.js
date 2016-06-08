import * as constants from '../constants/action-types';

const initialState = {
    items: [],
    loading: false,
    error: null
};

export default function navReducer(state = initialState, action = {}) {
    switch (action.type) {
        case constants.LOAD_FIELDS:
            return {
                ...state,
                loading: true
            };
        case constants.LOAD_FIELDS_SUCCESS:
            return {
                ...state,
                items: action.result,
                loading: false
            };
        case constants.LOAD_FIELDS_FAILURE:
            return {
                ...state,
                items: {},
                error: action.err,
                loading: false
            };
        default:
            return state;
    }
}
