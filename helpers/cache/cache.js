const nodeCache = require( "node-cache" );
const myCache = new nodeCache();

async function getCache(key, value){

    const cachedValue = myCache.get(key, true);
        if (cachedValue != undefined) {
            return cachedValue;
            } else {
            await myCache.set(key, value);
            return true;
    }
    
}

module.exports = getCache;