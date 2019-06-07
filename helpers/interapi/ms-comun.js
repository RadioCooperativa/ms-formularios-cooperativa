const fetch = require('node-fetch');

const URL_BASE = "http://localhost:3002/v1/";

async function getMarca()
{
    try
    {
        let response_1 = await fetch(`${URL_BASE}mainData/marca/`);
        return response_1.json();
    }
    catch(Error)
    {
        console.error(Error);
    }
}

async function getModelo()
{
    try
    {
        let response_1 = await fetch(`${URL_BASE}mainData/modelo/`);
        return response_1.json();
    }
    catch(Error)
    {
        console.error(Error);
    }
}

async function dataObject(){
    const marca = await getMarca();
    const modelo = await getModelo();

    // const data = [];
    // data.push(marca, modelo);

    return {
        marca,
        modelo
    };
}

module.exports = {dataObject}