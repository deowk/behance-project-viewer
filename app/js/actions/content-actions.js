import * as constants from '../constants/action-types';
import Client from '../api/client';

function loadContentFromAPI(field, search) {
  return Client.Projects.byField({field: field, search: search})
    .then((res) => {
      res.data.type = field;
      return res;
    });
}

export function loadContent(field, search) {
  return {
    types: [
      constants.LOAD_CONTENT,
      constants.LOAD_CONTENT_SUCCESS,
      constants.LOAD_CONTENT_FAILURE
    ],
    promise: loadContentFromAPI(field, search)
  }
}
