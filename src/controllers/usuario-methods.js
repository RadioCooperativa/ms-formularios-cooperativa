require('dotenv').config({ path: 'env.env' });

const tasaService = require('../database/formulario-db');
const httpStatus = require('http-status');
const constants = require('../../common/const');

let _get = async function (req, res, next) {
    try {
        let params = {
            
        };
        let result = await tasaService.get();
        if (result == null) {
            res.json(httpStatus.NOT_FOUND);
            res.end();
            return;
        }

        res.json(httpStatus.OK, result.recordset);
        res.end();
    } catch (err) {
        trace.trackException(err);
        res.send(httpStatus.INTERNAL_SERVER_ERROR, JSON.stringify({Error: httpStatus.INTERNAL_SERVER_ERROR, Message: constants.Error.INTERNALERROR}) );
    }
};


let _tasaCotizacion = async function (req, res, next) {
    res.setHeader('Content-type', 'application/json');
    try {

        let params = {
            producto_id: req.params.producto_id,
            subproducto_id: req.params.subproducto_id,
            canal_id: req.params.canal_id,
            fecha: req.params.fecha,
            maf: req.params.maf,
            local_id: req.params.local_id || null,
            modelo_id: req.params.modelo_id,
            valor_vehiculo: req.params.valor_vehiculo,
            moneda: req.params.moneda,
            uso_vehiculo: req.params.uso_vehiculo,
            tipo_vehiculo: req.params.tipo_vehiculo,
            estado_vehiculo: req.params.estado_vehiculo,
            annio_vehiculo: req.params.annio_vehiculo,
            valor_futuro: req.params.valor_futuro,
            tiene_bono: req.params.tiene_bono,
            score: req.params.score,
            cuotas: req.params.cuotas,
        };

        let result = await tasaService.getTasaCotizacion(
            params
        );

        if (result == null) {
            res.json(httpStatus.NOT_FOUND);
            res.end();
            return;
        }
        if (result === false) {
            res.json(httpStatus.BAD_REQUEST);
            res.end();
            return;
        }
        
        res.json(httpStatus.OK, result);
        res.end(JSON.stringify(result));

        return;
    } catch (err) {
        trace.trackException(err);
        res.send(httpStatus.INTERNAL_SERVER_ERROR, JSON.stringify({Error: httpStatus.INTERNAL_SERVER_ERROR, Message: constants.Error.INTERNALERROR}) );
    }
};

let _tasaSimulacion = async function (req, res, next) {
    res.setHeader('Content-type', 'application/json');
    try {
        let params = {
            producto_id: req.params.producto_id,
            subproducto_id: req.params.subproducto_id,
            canal_id: req.params.canal_id,
            fecha: req.params.fecha,
            local_id: req.params.local_id || null,
            cuotas: req.params.cuotas,
            monto_solicitado: req.params.monto_solicitado,
            moneda: req.params.moneda,
        };

        let result = await tasaService.getTasaSimulacion(
            params
        );

        if (result == null) {
            res.json(httpStatus.NOT_FOUND);
            res.end();
            return;
        }
        if (result === false) {
            res.json(httpStatus.BAD_REQUEST);
            res.end();
            return;
        }

        res.json(httpStatus.OK, result);
        res.end(JSON.stringify(result));

        return;
    } catch (err) {
        trace.trackException(err);
        res.send(httpStatus.INTERNAL_SERVER_ERROR, JSON.stringify({Error: httpStatus.INTERNAL_SERVER_ERROR, Message: constants.Error.INTERNALERROR}) );
    }
};

module.exports = {
    get: _get,
    tasaCotizacion: _tasaCotizacion, 
    tasaSimulacion: _tasaSimulacion 
}