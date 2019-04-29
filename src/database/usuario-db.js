'use strict';
const mysql = require('mysql');
const dbConfig = require('../../common/configDb');
const constants = require('../../common/const');
const enums = require('../../common/enums');

async function get(params){
    const pool = await mysql.createPool(dbConfig);
    let query = '';

    pool.query(query,(err,data) => {

        if(err){
            console.error(err);
            return false;
        }
        return data;
    });
}

module.exports = {
    get: get
}

