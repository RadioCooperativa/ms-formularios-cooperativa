const https = require('https');

    https.get('https://localhost:3002/v1/marca', (resp) => {
    let data = '';

            resp.on('data',(chunk)=>{
                data += chunk;
            });
            resp.on('end', () => {
                console.log(JSON.parse(data));
                const value = JSON.parse(data);
                return value;
            });
            }).on("error", (err) => {   
                console.log("Error: " + err.message);
            });

module.exports = {
    getMarca,
}



   
