//urls for database secrets
const userSecret = process.env.KV_SQL_SERVER_USER;
const passwordSecret = process.env.KV_SQL_SERVER_PASSWORD;
const dbSecret = process.env.KV_SQL_SERVER_BD;
const hostSecret = process.env.KV_SQL_SERVER_HOST;

'use strict'
 
const mysql = require('mysql');
 
module.exports = {
    name: 'formularios-api',
    hostname : 'http://localhost',
    version: '1.0.0',
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3001,
    db: {
        get : mysql.createConnection({
			host     : hostSecret,
			user     : userSecret,
			password : passwordSecret,
			database : dbSecret
		})
    }
}


