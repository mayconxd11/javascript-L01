const prompt = require ('prompt-sync')();

const cFText = prompt ('Qual é o custo da fábrica');
const Custo = Number(cFText);


 const pD  = (Custo *0.28)
 const impostos = (Custo*0.45)
 const total = (Custo + pD + impostos)

 console.log(`O custo para o consumidor será de: ${total}`)

