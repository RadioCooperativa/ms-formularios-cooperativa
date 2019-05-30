async function map(data, cacheData)
{
    try
    {
            const dataMap = cacheData.map(function(e){
                    // if(e.id_marca == data[i].id_marca_vehiculo){
                    //             const result = Object.assign(data,cacheData);
                    //             return result;
                            
                    // }
                    console.log(e);
                    return e;
            });
        return dataMap;
        
    }
    catch(Error)
    {
        console.error(Error);
    }
}

module.exports = {map,}