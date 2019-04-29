'use strict'
require('dotenv').config({ path: 'env.env' });
const userServices = require('../database/usuario-db');
const httpStatus = require('http-status');
const constants = require('../../common/const');

let _get = async function (req, res, next) {
    try {

        let result = await userServices.getForm(req,res);
        if (result == null) {
            res.json(httpStatus.NOT_FOUND);
            res.end();
            return;
        }

        res.json(httpStatus.OK, result);
        res.end();
    } catch (err) {
        res.send(httpStatus.INTERNAL_SERVER_ERROR, JSON.stringify({Error: httpStatus.INTERNAL_SERVER_ERROR, Message: constants.Error.INTERNALERROR}) );
    }
};


module.exports = {
    get: _get,
}