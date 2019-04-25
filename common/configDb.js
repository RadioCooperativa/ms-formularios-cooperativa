//urls for database secrets
const userSecret = process.env.KV_SQL_SERVER_USER;
const passwordSecret = process.env.KV_SQL_SERVER_PASSWORD;
const dbSecret = process.env.KV_SQL_SERVER_BD;
const hostSecret = process.env.KV_SQL_SERVER_HOST;


(async function init() {
    try {
        
        exports.dbConfig = {
            user: userSecret,
            password: passwordSecret,
            server: hostSecret,
            database: dbSecret,
            options: {
                encrypt: true
                }
        };
    } catch (error) {
        console.log(error);
        throw error;
    }
})();


