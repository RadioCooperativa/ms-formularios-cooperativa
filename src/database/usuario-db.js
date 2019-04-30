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

async function insertUsuario(params){
    const {id_tipo_usuario, nombre_usuario, pass_usuario, descricpion_usuario } = params;

    let query = "INSERT INTO T_USUARIOS     (id_tipo_usuario, 
                                            nombre_usuario, 
                                            pass_usuario, 
                                            descripcion_usuario, 
                                            fecha_creacion, 
                                            fecha_modificacion, 
                                            usuario_creacion, 
                                            usuario_modificacion, 
                                            vigente) VALUES ();
    

    
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