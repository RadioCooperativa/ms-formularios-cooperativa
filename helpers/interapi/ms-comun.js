const https = require('https');

https.get('http://localhost:3002/v1/marca', (resp) => {

let data = '';

    resp.on('data',(chunk)=>{
        data += chunk;
        });

    resp.on('end', () => {
        console.log(JSON.parse(data));
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);

});


   
