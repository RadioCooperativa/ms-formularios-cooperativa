'use strict';
var methods = require('../../src/controllers/formulario-methods');

module.exports.register = (server) => {
    server.get({
        path: '/formularios/',
        version: '1.0.0'
    },
        methods.get
    );
    server.get({
        path: '/formularios/:id',
        version: '1.0.0'
    },
    methods.getId
    );

    server.post({
        path: '/formularios/',
        version: '1.0.0',
        validation: {
            params: require('../../src/validators/formularios/insert')
        },
    },
    methods.insertForm
    );

    server.put({
        path: '/formularios/:id',
        version: '1.0.0',
        validation: {
            params: require('../../src/validators/usuarios/insert')
        },
    },
    methods.updateForm
    );

    server.del({
        path: '/formularios/:id',
        version: '1.0.0'
    },
    methods.deleteForm
    );
}