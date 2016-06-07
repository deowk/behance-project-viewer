import * as constants from '../constants/action-types';

export function UpdateWelcomeMsg() {
    return {
        type: constants.UPDATE_WELCOME_MSG,
        msg: 'Welcome to React + Redux + Webpack boilerplate'
    }
}
