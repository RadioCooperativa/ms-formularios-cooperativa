'use strict';
const joi = require('joi');

module.exports = joi.object().keys({

    persona: {
            id_usuario:joi.number().integer().required(),
            rut_persona:joi.string().max(100),
            nombre_completo_persona:joi.string().max(100).required(),
            correo_persona:joi.string().max(25),
            telefono_persona:joi.string().max(20),
    },
    direccion: { 
            id_comuna: joi.number().integer().required(347),
			calle_direccion: joi.string().max(100),
			numero_direccion: joi.number().integer(),
			observacion_direccion: joi.string().max(100),
            cod_postal: joi.number().integer(),
        },
    formulario: { 
            id_tipo_formulario: joi.number().integer().required(),
		    nombre_formulario: joi.string().max(100),
		    descripcion_formulario: joi.string().max(100),
		    nombre_sitio_web: joi.string().max(20),
		    nuevo_valor_vehiculo: joi.number().integer(),
		    antiguo_valor_vehiculo: joi.number().integer(),
		    valor_bono_vehiculo: joi.number().integer(),
		    valor_pie_vehiculo: joi.number().integer(),
		    valor_cuota: joi.number().integer(),
		    valor_matricula: joi.number().integer(),
		    id_marca_vehiculo: joi.number().integer(),
		    id_modelo_vehiculo: joi.number().integer(),
		    id_concesionaria_vehiculo: joi.number().integer(),
            id_sucursal_vehiculo: joi.number().integer()
    }
    
});