const prompt = require ('prompt-sync')()

const totaldediasText = prompt ('\nSeus Dias vividos')
const  totaldeDias = Number (totaldediasText);

const anos = Math.floor(totaldeDias /365);
const meses = Math.floor ((totaldeDias %365)/ 30);
const dias = Math.floor ((totaldeDias %365)% 30);



console.log(`Anos vividos:${anos}`);
console.log (`Meses vividos:${meses}`);
console.log (`Dias vividos: ${dias}`);
