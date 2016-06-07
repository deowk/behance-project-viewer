import Mappersmith from 'mappersmith/node';
import CustomGateway from './custom-gateway';
import Manifest from './manifest';

Mappersmith.Env.USE_PROMISES = true;

var Client = Mappersmith.forge(Manifest, CustomGateway);

Client.onError(function(request, err) {
  logger.error(request.url);
  logger.error(request.params);
  logger.error(request.status);
});

export default Client;
