import log from 'loglevel';
import config from '../../../etc/app.config';

var originalFactory = log.methodFactory;
log.methodFactory = function (methodName, logLevel, loggerName) {
    var rawMethod = originalFactory(methodName, logLevel, loggerName);

    return function (...args) {
        rawMethod(loggerName + ':', ...args);
    };
};

/**
 * Helper function for handling the set up of the logger.
 *
 * @param name - Name to which the logger will set
 */
var getLogger = function (name) {
    let logger = log.getLogger(name);
    logger.setLevel(config.logging.level);
    return logger;
};

export default getLogger;
