import config from '../../../etc/app.config';

// IMPORTANT! This file get's processed when the application starts. EVERYTHING that goes in here HAS to be static/immutable/constant.
// You cannot add anything in here that changes. E.g.: You can't access the localStore (cookies) here, since they may change
// as the program executes. For example - accessToken doesn't exist when application first starts - as you haven't logged in yet.

var Manifest = {
    host: config.api.hosts.base,
    resources: {
        Fields: {
          all: {
            path: '/v2/fields?client_id=' + config.api.clientId,
            params: {headers: {'Content-Type': 'application/json'}}
          }
        },
        Projects: {
          byField: {
            path: '/v2/projects?field={field}&client_id=' + config.api.clientId,
            params: {headers: {'Content-Type': 'application/json'}}
          }
        }
    }
};

export default Manifest;
