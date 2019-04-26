'use strict';
const mysql = require('mysql');
const configDb = require('../../common/configDb');
const constants = require('../../common/const');
const enums = require('../../common/enums');


async function get(req, res){
    let connection = await configDb.db.get;
    connection.connect();
    let query = 'SELECT * FROM t_usuarios';



    // connection.query(query,function(error, results, fields){
    //     if(error){
    //         throw error;
    //     } else{
    //         return results[0];
    //     }
        
    // });
    connection.end();

}

module.exports = {
    getForm: get,
}

