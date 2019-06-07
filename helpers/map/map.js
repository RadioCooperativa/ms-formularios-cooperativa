async function map(data_, cacheData)
{
    try
    {
            const dataMap = cacheData.map(function(e){

                const { marca :{data}} = e;
                // for(let i = 0; i<data.length; i+1){
                //     if(data[i].id_marca == data_[i].id_marca_vehiculo){
                                 
                            
                //     }
                // }
                data.forEach(element => {
                    if(element.id_marca == 1){
                        const nombreMarca = element.nombre_marca;
                        const object = Object.assign(data_[0],nombreMarca);
                        return object;
                    }
                });
                    // console.log(e);
                    // return e;
            });
        return dataMap;

        // cacheData.forEach(element => {
        //     element[0].data.modelo
            
        // });
        
    }
    catch(Error)
    {
        console.error(Error);
    }
}

module.exports = {map}