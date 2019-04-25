'use strict';
const mysql = require('mysql');
const secrets = require('../../common/configDb');
const constants = require('../../common/const');
const enums = require('../../common/enums');



async function get(req, res){
    let config = await secrets.dbConfig;
    //const pool = await mysql.createPool(config);
    const connection = mysql.createConnection(config);
    connection.connect();
    let query = 'SELECT DISTINCT tp.id_persona, tp.id_direccion, tp.id_usuario, tp.rut_persona, tp.nombre_completo_persona, tp.correo_persona, tp.telefono_persona, tf.nombre_formulario, tf.descripcion_formulario, tf.nombre_sitio_web, tf.nuevo_valor_vehiculo FROM t_personas tp INNER JOIN t_formulario_t_personas tftp INNER JOIN t_formularios tf on tftp.id_persona = tp.id_persona AND tftp.id_formulario = tf.id_formulario where tp.rut_persona = "192322170"';

    connection.query(query,function(error, results, fields){
        if(error){
            throw error;
        } else{
            return results[0];
        }
        
    });
    connection.end();

    // pool.query(query,(err,data) => {

    //     if(err){
    //         console.error(err);
    //         //return res.json({'error': true, 'message': 'Error occurred'+err});
    //         throw err;
    //     }
    //     return res.end();
    // });
}

module.exports = {
    getForm: get,
}

