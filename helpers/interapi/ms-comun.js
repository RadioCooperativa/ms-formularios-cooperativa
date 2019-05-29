const fetch = require('node-fetch');

const URL_BASE = "http://localhost:3002/v1/";

async function getMarca()
{
    try
    {
        let response_1 = await fetch(`${URL_BASE}marca/`);
        return response_1.json();
    }
    catch(Error)
    {
        console.error(Error);
    }
}

module.exports = {getMarca,}