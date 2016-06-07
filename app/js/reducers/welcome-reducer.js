import * as constants from '../constants/action-types';

const initialState = {
    msg: '',
};

export default function welcomeReducer(state = initialState, action = {}) {
    switch (action.type) {
        case constants.UPDATE_WELCOME_MSG:
            return {
                ...state,
                msg: action.msg
            };
        default:
            return state;
    }
}
