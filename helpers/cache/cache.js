const nodeCache = require( "node-cache" );
const myCache = new nodeCache();
const getMarca = require('../../helpers/interapi/ms-comun');

async function setCache(key, value){
    const value_ = await getMarca.getMarca();
    const cachedValue = myCache.set(key, value_);
        if (cachedValue != undefined) {
            return cachedValue;
            } else {
                const resutl = await myCache.get(key,true);
                return resutl;
    }
    
}

module.exports = {
    setCache,
};