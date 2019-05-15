const fetch = require('node-fetch');
const cache = require('../cache/cache')

function getSucursal(){

}
fetch('https://localhost:3002/v1/sucursal')
    .then(res => res.text())
    .then(body => console.log(body));

    cache.getCache("sucursal",res.text());
