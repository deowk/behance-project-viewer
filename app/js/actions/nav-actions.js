import * as constants from '../constants/action-types';
import Client from '../api/client';

function loadFieldsFromAPI() {
  return Client.Fields.all()
    .then((res) => {
      let response = {};
      response.data = res.data.popular;
      return response;
    });
}

export function loadFields() {
  return {
    types: [
      constants.LOAD_FIELDS,
      constants.LOAD_FIELDS_SUCCESS,
      constants.LOAD_FIELDS_FAILURE
    ],
    promise: loadFieldsFromAPI()
  }
}
