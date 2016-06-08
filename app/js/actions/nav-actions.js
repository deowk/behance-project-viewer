import * as constants from '../constants/action-types';
import Client from '../api/client';

function loadFieldsFromAPI() {
  return Client.Fields.all();
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
