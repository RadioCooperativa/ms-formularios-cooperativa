const NodeCache = require( "node-cache" );
const myCache = new NodeCache();
const getApiMarca = require('../../helpers/interapi/ms-comun')

async function getCacheMarca(key)
{
    try
    {
        let response = await myCache.get(key);
            if(response == undefined){
                const marca = await getApiMarca.getMarca();
                myCache.set(key,marca,3600);
                return marca;
            }else{
                console.log( response );
                return response;
            }
    }
    catch(Error)
    {
        console.error(Error);
    }

}

module.exports = {getCacheMarca,}