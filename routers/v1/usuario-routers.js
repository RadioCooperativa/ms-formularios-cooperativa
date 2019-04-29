'use strict';
var methods = require('../../src/controllers/usuario-methods');

module.exports.register = (server) => {
    server.get({
        path: '/usuario/',
        version: '1.0.0',
        // validation: {
        //     params: require('../../src/validators/id')
        // },
    },
        methods.get
    );


}