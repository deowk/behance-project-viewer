import * as constants from '../constants/action-types';

const initialState = {
    structure: {},
    loading: false,
    error: null
};

export default function contentReducer(state = initialState, action = {}) {
    let structure = {...state.structure};
    switch (action.type) {
        case constants.LOAD_CONTENT:
            return {
                ...state,
                loading: true
            };
        case constants.LOAD_CONTENT_SUCCESS:
            if (!structure[action.result.type]) {
                structure[action.result.type] = {};
            }
            structure[action.result.type] = {
                items: action.result.projects
            };
            return {
                ...state,
                structure: structure,
                loading: false
            };
        case constants.LOAD_CONTENT_FAILURE:
            return {
                ...state,
                error: action.err,
                loading: false
            };
        default:
            return state;
    }
}
