'use strict';
const mysql = require('mysql2/promise');
const configDb = require('../../common/configDb');
const enums = require('../../common/enums');


const pool = mysql.createPool(configDb.db);

async function get(){
    
    let query = 'SELECT * FROM T_FORMULARIOS WHERE vigente = 0'
    const result = await pool.query(query);

    if (result[0].length == 0) {
        return null;
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

const { data } = params;
const { persona, direccion, formulario } = data; 
//const { } = cache;

const { id_usuario, rut_persona, nombre_completo_persona, correo_persona, telefono_persona } = persona;

const { id_comuna, calle_direccion, numero_direccion, observacion_direccion, cod_postal } = direccion;

const { id_tipo_formulario, id_cliente, nombre_formulario, descripcion_formulario, nombre_sitio_web, nuevo_valor_vehiculo, antiguo_valor_vehiculo, valor_bono_vehiculo, valor_pie_vehiculo, valor_cuota, valor_matricula, id_marca_vehiculo, id_modelo_vehiculo, id_concesionaria_vehiculo, id_sucursal_vehiculo } = formulario;


try {

    let queryFormulario = 'INSERT INTO T_FORMULARIOS SET id_tipo_formulario = ?, id_usuario = ?, id_cliente = ?, nombre_formulario = ?, descripcion_formulario = ?, nombre_sitio_web = ?, nuevo_valor_vehiculo = ?, antiguo_valor_vehiculo = ?, valor_bono_vehiculo = ?, valor_pie_vehiculo = ?, valor_cuota = ?, valor_matricula = ?, id_marca_vehiculo = ?, id_modelo_vehiculo = ?, id_concesionaria_vehiculo = ?, id_sucursal_vehiculo = ?, dataJson = ?, fecha_creacion = ?, fecha_modificacion = ?, usuario_creacion = ?, usuario_modificacion = ?, vigente = ?';

    let queryPersonas = 'INSERT INTO T_PERSONAS SET id_usuario = ?, rut_persona = ?, nombre_completo_persona = ?, correo_persona = ?, telefono_persona = ?, fecha_creacion = ?, fecha_modificacion = ?, usuario_creacion = ?, usuario_modificacion = ?, vigente = ?';

    let queryDireccion = 'INSERT INTO T_DIRECCION SET id_persona = ?, id_comuna = ?, calle_direccion = ?, numero_direccion = ?, observacion_direccion = ?, cod_postal = ?,  fecha_creacion = ?, fecha_modificacion = ?, usuario_creacion = ?, usuario_modificacion = ?, vigente = ?';

    let queryTpaso = 'INSERT INTO T_FORMULARIO_T_PERSONAS SET id_persona = ?, id_formulario = ?';

    // let dataJson = {
    //                     "persona":{
    //                         "id_usuario":id_usuario,
    //                         "rut_persona":rut_persona,
    //                         "nombre_completo_persona":nombre_completo_persona,
    //                         "correo_persona":correo_persona,
    //                         "telefono_persona":telefono_persona
    //                         },
    //                     "direccion":{
    //                         "id_persona": id_persona,
    //                         "id_comuna":id_comuna,
    //                         "calle_direccion":calle_direccion,
    //                         "numero_direccion":numero_direccion,
    //                         "observacion_direccion":observacion_direccion,
    //                         "cod_postal":cod_postal                        
    //                         },
    //                     "formulario":{
    //                         "id_tipo_formulario": id_tipo_formulario,
    //                         "id_usuario": id_usuario,
    //                         "nombre_formulario": nombre_formulario,
    //                         "descripcion_formulario": descripcion_formulario,
    //                         "nombre_sitio_web": nombre_sitio_web,
    //                         "nuevo_valor_vehiculo": nuevo_valor_vehiculo,
    //                         "antiguo_valor_vehiculo": antiguo_valor_vehiculo,
    //                         "valor_bono_vehiculo": valor_bono_vehiculo,
    //                         "valor_pie_vehiculo": valor_pie_vehiculo,
    //                         "valor_cuota": valor_cuota,
    //                         "valor_matricula": valor_matricula,
    //                             "marca_vehiculo":{
    //                                 "id_marca_vehiculo": id_marca_vehiculo,
    //                                 "nombre_marca_vehiculo": nombre_marca_vehiculo
    //                             },
    //                             "modelo_vehiculo":{
    //                                 "id_modelo": id_modelo,
    //                                 "nombre_modelo": nombre_modelo
    //                             },
    //                             "concesionaria_vehiculo":{
    //                                 "id_concesionaria": id_concesionaria_vehiculo,
    //                                 "nombre_concesionaria": nombre_concesionaria
    //                             },
    //                             "sucursal_concesionaria":{
    //                                 "id_sucursal": id_sucursal,
    //                                 "nombre_sucursal": nombre_sucursal,
    //                                 "descripcion_sucursal": descripcion_sucursal,
    //                                 "nombre_comuna": nombre_comuna,
    //                                 "nombre_concesionaria":nombre_concesionaria,
    //                                 "direccion_sucursal":direccion_sucursal
    //                             }
    //                     }
    //             };

    let dataJson = null;

    const resultForm = await connection.query(queryFormulario,[id_tipo_formulario, id_usuario, id_cliente, nombre_formulario, descripcion_formulario, nombre_sitio_web, nuevo_valor_vehiculo, antiguo_valor_vehiculo, valor_bono_vehiculo, valor_pie_vehiculo, valor_cuota, valor_matricula, id_marca_vehiculo, id_modelo_vehiculo, id_concesionaria_vehiculo, id_sucursal_vehiculo, dataJson, fecha_creacion.fecha_creacion, null, null, null, 0]);

    const lastIdFormulario = resultForm[0].insertId;

    const resultPersonas = await connection.query(queryPersonas,[id_usuario, rut_persona, nombre_completo_persona, correo_persona, telefono_persona, fecha_creacion.fecha_creacion, null, null, null, 0]);

    const lastIdPersona = resultPersonas[0].insertId;
    
    await connection.query(queryDireccion, [lastIdPersona, id_comuna, calle_direccion, numero_direccion, observacion_direccion, cod_postal, fecha_creacion.fecha_creacion, null, null, null, 0]);

    await connection.query(queryTpaso, [lastIdPersona, lastIdFormulario]);

    await connection.commit();
    return true;
    

  } catch (err) {

    await connection.rollback();
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