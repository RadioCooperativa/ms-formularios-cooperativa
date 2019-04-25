// urls for database secrets
const userSecret = process.env.KV_SQL_SERVER_USER;
const passwordSecret = process.env.KV_SQL_SERVER_PASSWORD;
const dbSecret = process.env.KV_SQL_SERVER_BD;
const hostSecret = process.env.KV_SQL_SERVER_HOST;


let dbConfig;

const getSecrets = async function () {
  try {
    if (dbConfig !== undefined) {
      return dbConfig;
    }

    dbConfig = {
      user: userSecret,
      password: passwordSecret,
      server: hostSecret,
      database: dbSecret,
      options: {
        encrypt: true
      }
    };

    return dbConfig;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

exports.dbConfig = getSecrets;
