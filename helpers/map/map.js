async function map(data_, cacheData)
{
    //data_ --> formulario desde bd
    //cacheData --> caché de modelos y marcas
    const {marca, modelo} = cacheData;
    const {data:dataMarca} = marca;
    const {data:dataModelo} = modelo;
        try
        {
            let dataObject = {};
            let finalDataObject = [];
             data_.map( function(e){
                    dataObject = {
                        id_formulario: e.id_formulario,
                        nombre_formulario: e.nombre_formulario,
                        sitio_web: e.nombre_sitio_web,
                        antiguo_valor_vehiculo: e.antiguo_valor_vehiculo
                    }
                 dataMarca.map(function (f){
                        if(e.id_marca_vehiculo === f.id_marca){
                            const objectMarca = {
                                marca:{
                                    id_marca: f.id_marca,
                                    nombre_marca: f.nombre_marca,
                                    descripcion_marca: f.descripcion_marca
                                }
                            }
                            Object.assign(dataObject,objectMarca)
                        }
                });  
                dataModelo.map(function (f){
                    if(e.id_modelo_vehiculo === f.id_modelo){
                        const objectModelo = {
                            modelo:{
                                id_modelo: f.id_modelo,
                                nombre_modelo: f.nombre_modelo,
                                descripcion_modelo: f.descripcion_modelo
                            }
                        }
                        Object.assign(dataObject,objectModelo)
                    }
                });
                finalDataObject.push(dataObject);
            });
            return finalDataObject;
    }
    catch(Error)
    {
        console.error(Error);
    }
}
module.exports = {map}