'use strict';
const joi = require('joi');
const rutValidacion = require('./../rutExtend');


module.exports = joi.object().keys({

    persona: {
            id_usuario:joi.number().integer().required(),
            rut_persona:rutValidacion.RutValidacion().RutValido().default(null),
            nombre_completo_persona:joi.string().default(null),
            correo_persona:joi.string().email().default(null),
            telefono_persona:joi.string().default(null),
    },
    direccion: { 
            id_comuna: joi.number().integer().default(347).required(),
			calle_direccion: joi.string().allow(null),
			numero_direccion: joi.number().integer().allow(null),
			observacion_direccion: joi.string().allow(null),
            cod_postal: joi.number().integer(),
        },
    formulario: { 
            id_tipo_formulario: joi.number().integer().required(),
		    nombre_formulario: joi.string().allow(null),
		    descripcion_formulario: joi.string().allow(null),
		    nombre_sitio_web: joi.string().allow(null),
		    nuevo_valor_vehiculo: joi.number().integer().allow(null),
		    antiguo_valor_vehiculo: joi.number().integer().allow(null),
		    valor_bono_vehiculo: joi.number().integer().allow(null),
		    valor_pie_vehiculo: joi.number().integer().allow(null),
		    valor_cuota: joi.number().integer().allow(null),
		    valor_matricula: joi.number().integer().allow(null),
		    id_marca_vehiculo: joi.number().integer().allow(null),
		    id_modelo_vehiculo: joi.number().integer().allow(null),
		    id_concesionaria_vehiculo: joi.number().integer().allow(null),
            id_sucursal_vehiculo: joi.number().integer().allow(null)
    }
    
});