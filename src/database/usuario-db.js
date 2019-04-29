'use strict';
const mysql = require('mysql2/promise');
const configDb = require('../../common/configDb');
const constants = require('../../common/const');
const enums = require('../../common/enums');

const pool = mysql.createPool(configDb.db);

async function get(){
    
    let query = 'SELECT * FROM t_usuarios'
    const result = await pool.query(query);

    if (!result[0]) {
        throw new Error('Post with this id was not found');
      }
      return result[0];

}

async function getId(id){
    let idUser = id;

    let query = 'SELECT * FROM T_USUARIOS WHERE ID_USUARIO = '+idUser+'';  
    const result = await pool.query(query);

    if (!result[0]) {
        throw new Error('Post with this id was not found');
      }
      return result[0];
}

module.exports = {
    getUser: get,
    getUserId: getId,
}