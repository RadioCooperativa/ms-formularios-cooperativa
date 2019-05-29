async function map(data, cacheData)
{
    try
    {
        for (let i = 0; i<data.length; i+1){
            const dataMap = cacheData.map(function(e){
                    if(e.id_marca == data[i].id_marca_vehiculo){
                        if( (typeof data === "object") && (data !== null) )
                            {
                                const result = Object.assign(data,cacheData);
                                return result;
                            }
                    }
            });
        return dataMap;
        }
    }
    catch(Error)
    {
        console.error(Error);
    }
}

module.exports = {map,}