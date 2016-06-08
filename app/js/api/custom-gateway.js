import Mappersmith from 'mappersmith/node';
import request from 'superagent';
let jsonp = require('superagent-jsonp');
import getLogger from '../utils/logging';

var logger = getLogger('app-gateway');

var AppGateway = Mappersmith.createGateway({

    get: function () {
        let theRequest = request.get(this.url);
        theRequest = this._handleOpts(theRequest, this);
        theRequest.use(jsonp).end((err, res) => {
            return this._handleResponse(err, res, this);
        });
    },

    post: function () {
        let theRequest = request.post(this.url);
        theRequest = this._handleOpts(theRequest, this);
        theRequest.send(this.body);
        theRequest.end((err, res) => {
            return this._handleResponse(err, res, this);
        });
    },

    put: function () {
        let theRequest = request.put(this.url);
        theRequest = this._handleOpts(theRequest, this);
        theRequest.send(this.body);
        theRequest.end((err, res) => {
            return this._handleResponse(err, res, this);
        });
    },

    delete: function () {
        let theRequest = request.del(this.url);
        theRequest = this._handleOpts(theRequest, this);
        theRequest.end((err, res) => {
            return this._handleResponse(err, res, this);
        });
    },

    /**
     * Handle the response we get back from superagent
     *
     * @param err - If there is an error
     * @param res - The superagent response
     * @param req - The superagent request
     * @private
     */
    _handleResponse: function (err, res, req) {
        let response = 'No response';
        if (res) {
            response = res.body ? res.body : res.text;
            if (response.http_code === 200) {
                req.successCallback(response);
                req.completeCallback();
                return;
            }
        }
        logger.warn(err, response);
        req.failCallback({
            status: res ? res.status : '400',
            args: {statusText: res ? res.statusText : 'No response', response: response}
        });
        req.completeCallback();
    },

    /**
     * If we have options to add, then add them here
     *
     * @param theRequest - The superagent request
     * @param req - The mappersmith request
     * @returns The superagent request
     * @private
     */
    _handleOpts: function (theRequest, req) {
        if (req.opts.headers) {
            if (req.opts.headers.withCredentials) {
                theRequest.withCredentials();
                delete req.opts.headers.withCredentials;
            }
            theRequest.set(req.opts.headers);
        }
        return theRequest;
    }
});

export default AppGateway;
