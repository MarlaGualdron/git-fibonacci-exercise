console.log("cargada la pagina")

const fs = require('fs');

let rawData = fs.readFileSync('purchases.json');
let purchase = JSON.parse(rawData);


console.log(purchase); 