'use strict';
const mysql = require('mysql2/promise');
const configDb = require('../../common/configDb');
const enums = require('../../common/enums');


const pool = mysql.createPool(configDb.db);

async function get(){
    
    let query = 'SELECT * FROM T_FORMULARIOS WHERE vigente = 0'
    const result = await pool.query(query);

    if (!result[0]) {
        throw new Error('GET with this id was not found');
      }
      return result[0];

}

async function getId(id){
    let query = 'SELECT * FROM T_FORMULARIOS WHERE ID_FORMULARIO = '+id+' AND vigente = 0';  
    const result = await pool.query(query);

    if (result[0].length === 0) {
        return null;
      }
      return result[0];
}

async function insertForm(params){

const connection = await pool.getConnection();
await connection.beginTransaction();
const fecha_creacion = {fecha_creacion: new Date()};

const { id_tipo_formulario, id_usuario, nombre_formulario, descripcion_formulario, nombre_sitio_web, nuevo_valor_vehiculo, antiguo_valor_vehiculo, valor_bono_vehiculo, valor_pie_vehiculo, valor_cuota, valor_matricula, id_marca_vehiculo, id_modelo_vehiculo, id_concesionaria_vehiculo, id_sucursal_vehiculo } = params;


try {

    let queryFormulario = 'INSERT INTO T_FORMULARIOS SET id_tipo_formulario = ?, id_usuario = ?, nombre_formulario = ?, descripcion_formulario = ?, nombre_sitio_web = ?, nuevo_valor_vehiculo = ?, antiguo_valor_vehiculo = ?, valor_bono_vehiculo = ?, valor_pie_vehiculo = ?, valor_cuota = ?, valor_matricula = ?, id_marca_vehiculo = ?, id_modelo_vehiculo = ?, id_concesionaria_vehiculo = ?, id_sucursal_vehiculo = ?, dataJson = ?, fecha_creacion = ?, fecha_modificacion = ?, usuario_creacion = ?, usuario_modificacion = ?, vigente = ? SET @id_formulario_scope = (SELECT LAST_INSERT_ID())';

    let queryPersonas = 'INSERT INTO T_PERSONAS SET id_usuario = ?, rut_persona = ?, nombre_completo_persona = ?, correo_persona = ?, telefono_persona = ?, fecha_creacion = ?, fecha_modificacion = ?, usuario_creacion = ?, usuario_modificacion = ?, vigente = ?';

    let dataJson = {};

    await connection.query(queryFormulario,[id_tipo_formulario, id_usuario, nombre_formulario, descripcion_formulario, nombre_sitio_web, nuevo_valor_vehiculo, antiguo_valor_vehiculo, valor_bono_vehiculo, valor_pie_vehiculo, valor_cuota, valor_matricula, id_marca_vehiculo, id_modelo_vehiculo, id_concesionaria_vehiculo, id_sucursal_vehiculo, dataJson, fecha_creacion.fecha_creacion, null, null, null, 0]);

     await connection.query(queryPersonas,[id_usuario, rut_persona, nombre_completo_persona, correo_persona, telefono_persona, fecha_creacion, fecha_modificacion, usuario_creacion, usuario_modificacion, vigente])

    await connection.commit();

  } catch (err) {

    await connection.rollback();
    // Throw the error again so others can catch it. 
    throw err;

  } finally {

    connection.release();

  }
}

async function updateForm(params){
    const {id, id_tipo_usuario, nombre_usuario, pass_usuario, descripcion_usuario } = params;
    const fecha_modificacion = {fecha_modificacion: new Date()}

    let query = 'UPDATE T_USUARIOS SET id_tipo_usuario = ?, nombre_usuario = ?, pass_usuario = ?,descripcion_usuario = ?, fecha_modificacion = ?,  usuario_modificacion = ?, vigente = ? WHERE id_usuario = '+id+'';

    const result = await pool.query(query,[id_tipo_usuario, nombre_usuario, pass_usuario, descripcion_usuario,fecha_modificacion.fecha_modificacion, null, 0]);

    if (result[0].affectedRows === 0) {
        return null;
      }
      return result[0];
}

async function deleteForm(id){
    const fecha_modificacion = {fecha_modificacion: new Date()}
    const eliminado = enums.Eliminado;
    
    let query = 'UPDATE T_USUARIOS SET fecha_modificacion = ?,  usuario_modificacion = ?, vigente = ? WHERE id_usuario = '+id+'';
    const result = await pool.query(query,[fecha_modificacion.fecha_modificacion, null, eliminado]);

    if (result[0].affectedRows === 0) {
        return null;
      }
      return result[0];
}

module.exports = {
    getForm: get,
    getFormId: getId,
    insertForm: insertForm,
    updateForm: updateForm,
    deleteForm: deleteForm
}