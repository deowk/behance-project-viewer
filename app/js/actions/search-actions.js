import * as constants from '../constants/action-types';

export function setSearch(search) {
  return {
    type: constants.SET_SEARCH,
    search: search
  }
}
