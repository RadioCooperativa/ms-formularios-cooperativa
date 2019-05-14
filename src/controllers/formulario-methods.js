'use strict'
require('dotenv').config({ path: 'env.env' });
const formServices = require('../database/formulario-db');
const httpStatus = require('http-status');
const constants = require('../../common/const');
// const { getCache  } = require('../../helpers/cache/cache')

let _get = async function (req, res, next) {
    try {
        let result = await formServices.getForm();
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

let _getId = async function (req, res, next) {
    try {
        const id = req.params.id
        let result = await formServices.getFormId(id);
        if (result === null) {
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

let _insert = async function (req, res, next){
    try{
        const { params } = req;

        // const cache = await getCache("form", null);
        // if (cache){
        //     console.info("cache: ",cache);
        // }
        let result = await formServices.insertForm(params);

        if(result === null){
            res.json(httpStatus.NOT_FOUND);
            res.end();
            return;
        }
        res.json(httpStatus.CREATED, result[0]);
        res.end();
        
    }catch(err){
        res.send(httpStatus.INTERNAL_SERVER_ERROR, JSON.stringify({Error: httpStatus.INTERNAL_SERVER_ERROR, Message: constants.Error.INTERNALERROR}) );

    }
};

let _update = async function (req, res, next){
    try{
        const { params } = req;
        let result = await formServices.updateForm(params);
        
        if(result === null){
            res.json(httpStatus.NOT_FOUND);
            res.end();
            return;
        }
        res.json(httpStatus.NO_CONTENT);
        res.end();
        
    }catch(err){
        res.send(httpStatus.INTERNAL_SERVER_ERROR, JSON.stringify({Error: httpStatus.INTERNAL_SERVER_ERROR, Message: constants.Error.INTERNALERROR}) );

    }
};

let _delete = async function (req, res, next){
    try{
        const { params:{id} } = req;
        let result = await formServices.deleteForm(id);
        
        if(result === null){
            res.json(httpStatus.NOT_FOUND);
            res.end();
            return;
        }
        res.json(httpStatus.OK);
        res.end();
        
    }catch(err){
        res.send(httpStatus.INTERNAL_SERVER_ERROR, JSON.stringify({Error: httpStatus.INTERNAL_SERVER_ERROR, Message: constants.Error.INTERNALERROR}) );

    }
};

module.exports = {
    get: _get,
    getId: _getId,
    insertForm: _insert,
    updateForm: _update,
    deleteForm: _delete
}